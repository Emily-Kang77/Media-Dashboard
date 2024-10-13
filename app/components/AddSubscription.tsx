import React from 'react'
import { createSupabaseMedia } from '../actions/actions'

const AddSubscription = () => {
  return (
    <div>
      <form action={createSupabaseMedia} className="max-w-md mx-auto p-4 border mt-10 border-gray-300 rounded-lg shadow-md">
        <label className="block mb-2">Title:</label>
        <input type="text" id="title" name="title" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
        <label className="block mb-2">Creator:</label>
        <input type="text" id="creator" name="creator" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
        <label className="block mb-2">Your review:</label>
        <textarea id="userReview" name="userReview" className="w-full p-2 mb-4 border border-gray-300 rounded-lg"></textarea>
        <label className="block mb-2">Type:</label>
        <input type="submit" value="Submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"/>
      </form>
    </div>
  )
}

export default AddSubscription