type SEOProps = {
    title:string,
    description?:string,
    type?:string,
    name?:string
}

const SEO = ({title,description,type,name}:SEOProps) => {
  return (
    <>
        <title>{title}</title>
        <meta name='description' content={description} />

        { /* Facebook tags */ }
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        { /* Twitter tags */ }
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
    </>
  )
}

export default SEO