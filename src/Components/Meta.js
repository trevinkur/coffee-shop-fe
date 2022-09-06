import Head from 'next/head'
import Script from 'next/script'

const Meta = (props) => {

    return(<>
        <Head>
            <title>{props.title}</title>
            <meta name="keyword" content={props.keyword}/>
            <meta name='description' content={props.description} />
            <meta charSet='utf-8'/>
            
            
             {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
             integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
              crossorigin="anonymous" /> */}
        </Head>
        <Script 
            strategy='lazyOnload'
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" 
            crossorigin="anonymous"
            onLoad={() => {console.log("jalan")}}
        />
    </>
        
    )
}

Meta.defaultProps = {
    title: "Coffee Shop",
    keyword: "Coffee shop",
    description: "ini description"
}

export default Meta