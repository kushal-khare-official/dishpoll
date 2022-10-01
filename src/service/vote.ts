import { child, get, ref, remove, update } from 'firebase/database'

import { db } from '../config/firebase'

export const getVote = async () => {
  const dbRef = ref(db)
  const snapshot = await get(child(dbRef, `dishes`))

  if (!snapshot.exists()) {
    console.log('No data available')
    return
  }

  const data = snapshot.val().dishes
  const voteData: Record<string, any> = {}

  for (let dishId in data) {
    voteData[dishId] = 0
    for (let uid in data[dishId]) {
      voteData[dishId] += data[dishId][uid]
    }
  }

  return voteData
}

export const getDishVote = async (dishId?: number, uid?: string) => {
  const dbRef = ref(db)
  const snapshot = await get(child(dbRef, `dishes/${dishId}/${uid}`))

  if (!snapshot.exists()) {
    console.log('No data available')
    return
  }

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
