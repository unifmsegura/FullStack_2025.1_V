module.exports = {
  createPost: async function(db, { titulo, resumo, conteudo }) {
    return db.collection('posts').insertOne({ titulo, resumo, conteudo, createdAt: new Date() });
  },
  getAllPosts: async function(db) {
    return db.collection('posts').find({}).sort({ createdAt: -1 }).toArray();
  }
};