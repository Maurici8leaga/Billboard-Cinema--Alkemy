function Footer(){
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/" rel="noopener noreferrer"> IG</a>
                        {/* en el footer queremos colocar links que nos redireccionen a otras paginas que no estan el proyecto si deben usar el element "a con sus elementos href y rel" */}
                                                {/* el elemento "noopener noreferrer" es para indicar que este link no llevara seguimiento */}
                    </li>
                </ul>
            </nav>
            <p>Copyright Alkemy Challenge</p>
        </footer>
    )
}

export default Footer;