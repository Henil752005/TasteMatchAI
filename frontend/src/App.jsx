import { useState } from 'react'
import axios from 'axios'
import { FaMusic, FaFilm, FaBook } from 'react-icons/fa'

function App() {
  const [user1, setUser1] = useState({})
  const [user2, setUser2] = useState({})
  const [result, setResult] = useState(null)
  const [icebreaker, setIcebreaker] = useState("")

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:5000/api/match', {
      user1,
      user2
    })
    setResult(res.data)
    setIcebreaker(res.data.icebreaker)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">🎯 TasteMatch.AI</h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">👤 User 1</h2>
            <Input label="Favorite Music" icon={<FaMusic />} onChange={val => setUser1({ ...user1, music: val })} />
            <Input label="Favorite Movie" icon={<FaFilm />} onChange={val => setUser1({ ...user1, movies: val })} />
            <Input label="Favorite Book" icon={<FaBook />} onChange={val => setUser1({ ...user1, books: val })} />
          </div>

          <div className="bg-blue-50 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">👤 User 2</h2>
            <Input label="Favorite Music" icon={<FaMusic />} onChange={val => setUser2({ ...user2, music: val })} />
            <Input label="Favorite Movie" icon={<FaFilm />} onChange={val => setUser2({ ...user2, movies: val })} />
            <Input label="Favorite Book" icon={<FaBook />} onChange={val => setUser2({ ...user2, books: val })} />
          </div>
        </div>

        <div className="text-center mt-6">
          <button onClick={handleSubmit} className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition">
            🔍 Find Match
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-green-100 p-4 rounded-xl text-center shadow-md">
            <p className="text-xl font-semibold text-green-800">🎉 Match Score: {result.compatibility}</p>
            <p className="text-gray-700 mt-2">Shared Interests: <strong>{result.shared_tastes.join(', ')}</strong></p>
            <div className="w-full bg-green-200 h-4 mt-4 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full" style={{ width: result.compatibility }} />
            </div>
            <p className="mt-4 text-md text-purple-700 font-medium italic">💬 Icebreaker: {icebreaker}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function Input({ label, icon, onChange }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        onChange={e => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}...`}
      />
    </div>
  )
}

export default App
