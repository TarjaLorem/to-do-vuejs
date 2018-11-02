import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}sw.js`, {
    ready () {},
    cached () {},
    updated () {},
    offline () {},
    error (error) { error }
  })
}
