import { child, get, ref, remove, update } from 'firebase/database'

import { db } from '../config/firebase'
import { IDish } from '../interfaces/Dish'

export const getVote = async () => {
  const voteData: Record<string, any> = {}
  const dbRef = ref(db)
  const snapshot = await get(child(dbRef, `dishes`))

  if (!snapshot.exists()) {
    throw new Error('No data available')
  } else {
    const data = snapshot.val()
    for (let dishId in data) {
      voteData[dishId] = 0
      for (let uid in data[dishId]) {
        voteData[dishId] += data[dishId][uid]
      }
    }
  }

  const res = await fetch(
    'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
  )
  const response = await res.json()

  return response
    .map((dish: IDish) => ({
      ...dish,
      points: voteData[dish.id] || 0,
    }))
    .sort((a: any, b: any) => b.points - a.points)
}

export const getDishVote = async (dishId?: number, uid?: string) => {
  const dbRef = ref(db)
  const snapshot = await get(child(dbRef, `dishes/${dishId}/${uid}`))

  if (!snapshot.exists()) throw new Error('No data available')

  return snapshot.val()
}

export const vote = async (
  dishId?: number | null,
  uid?: string | null,
  points?: number
) => {
  const updates: Record<string, any> = {}
  updates[`dishes/${dishId}/${uid}`] = points

  return await update(ref(db), updates)
}

export const removeVote = async (dishId?: number, uid?: string) => {
  await remove(ref(db, `dishes/${dishId}/${uid}`))
}
