//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

function Header(){
    //! JS ALANI

    const yazi = "Hello 2026"
    return(
        
    <header>
        {/* jsx ALANI yorum satiri */}
        <h1>{yazi}</h1>
    </header>
    )
}

export default Header
