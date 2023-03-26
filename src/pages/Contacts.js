const Contacts = () => {
    return (  

        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Lutsk, Ukraine</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+380974862989">+38 (097) 486-29-89</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:vladswim21@gmail.com">vladswim21@gmail.com</a></p>
                        </li>
                </ul>
                
            </div>
        </main>
    );
}
 
export default Contacts;