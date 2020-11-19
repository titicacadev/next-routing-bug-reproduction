import Router from 'next/router'

export default function Home() {
  return (
    <div>
      Hello world

      <button
        onClick={() => {
          Router.push(
            `${Router.pathname}?foo=bar`,
            `${Router.asPath}?foo=bar`,
          )
        }}
      >
        Push current URL with query string using href and as URL.
      </button>

      <button
        onClick={() => {
          Router.push(
            `${Router.asPath}?foo=bar`,
          )
        }}
      >
        Push current URL with query string using only as URL.
      </button>
    </div>
  )
}
