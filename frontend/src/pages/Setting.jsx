import { motion } from 'framer-motion'

export default function Settings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">Setting</h2>
      <p>Setting</p>
    </motion.div>
  )
}
