const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer class='footer text-faded text-center text-white py-5'>
        <div class='container'>
          <p class='m-0 small'>Copyright juicyfoods-demo: SryderCode &copy; {year}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
