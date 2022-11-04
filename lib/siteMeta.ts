const siteMeta = {
  hostname: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://produktywny.blog',
  title: 'Produktywny Blog',
  delimiter: ' | ',
}

export default siteMeta
