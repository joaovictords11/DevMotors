import Link from "next/link"
import './globals.scss'

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Ops! Página não encontrada</h1>
      <Link href="/">Voltar para home</Link>
    </div>
  )
}

export default NotFound