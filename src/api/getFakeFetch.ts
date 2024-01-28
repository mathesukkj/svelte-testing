export default function getFakeFetch() {
  return new Promise((resolve, reject) => {
    const num = Math.random() * 10

    setTimeout(() => {
      if(num > 5) resolve("oi")
      reject("ERRO!!!")
    }, 2000)
  })
}