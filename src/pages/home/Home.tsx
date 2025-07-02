// src/pages/home/Home.tsx

import { Link } from "react-router-dom";
import homeIllustration from '../../assets/imagemfarmacia.png'; 

function Home() {
    return (
        <div className="bg-white flex justify-center items-center h-full">
            <div className='container grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16 px-4'>
                
                <div className="flex flex-col gap-4 items-center justify-center text-center text-slate-900">
                    <h2 className='text-5xl font-bold'>
                        Seja bem vinde!
                    </h2>
                    <p className='text-xl'>Aqui você encontra Medicamentos e Cosméticos!</p>
                    <div className="flex justify-around gap-4">
                        <Link to='/cadastrarProduto' className='rounded bg-indigo-700 text-white py-2 px-6 hover:bg-indigo-800 font-bold'>
                            Cadastrar Produto
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex justify-center">
                    <img
                        src={homeIllustration}
                        alt="Ilustração de uma farmácia"
                        className='w-full max-w-md'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;