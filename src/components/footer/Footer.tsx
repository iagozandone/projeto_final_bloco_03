// src/components/footer/Footer.tsx

import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear();

    return (
        // 1. Cor de fundo ajustada para o mesmo tom do Navbar
        <div className="flex justify-center text-white bg-indigo-900">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">Farmácia Generation | Copyright: {data}</p>
                <p className="text-lg">Acesse nossas redes sociais</p>
                <div className="flex gap-2">
                    {/* Adicione os links reais para suas redes sociais no 'href' */}
                    <a href="https://linkedin.com" target="_blank">
                        <LinkedinLogo size={48} weight="bold" />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <InstagramLogo size={48} weight="bold" />
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <FacebookLogo size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;