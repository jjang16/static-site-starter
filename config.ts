export const getOrigin = () => {
  if (process.env.NODE_ENV === `development`) {
    return `https://localhost:8000`
  } else {
    return `https://place-your-domain`
  }
}
