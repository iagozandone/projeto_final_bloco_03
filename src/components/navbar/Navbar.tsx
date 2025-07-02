// src/components/navbar/Navbar.tsx

// 1. Adicionado o ícone 'PlusCircle' para o logo
import { MagnifyingGlass, ShoppingCart, User, PlusCircle } from "@phosphor-icons/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()
    const [nome, setNome] = useState<string>("")

    function handleBuscarProdutos(e: ChangeEvent<HTMLInputElement>){
        setNome(e.target.value)
    }

    function buscarProdutos(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        navigate(`/produtos/nome/${nome}`) 
        setNome('')
    }
    
    return (
        <header className="flex justify-center w-full py-4 text-white bg-indigo-900 shadow-lg">
            <div className="container flex items-center justify-between mx-4 text-lg">
                
                <Link to="/home" className="flex items-center gap-2">
                    <PlusCircle size={40} weight="bold" className="text-red-500 bg-white rounded-full p-1" />
                    <span className="font-bold text-2xl hidden sm:block">FARMÁCIA</span>
                </Link>

                <div className="relative flex items-center justify-center w-2/5 text-black">
                    <form 
                        className="flex items-center justify-center w-full"
                        onSubmit={buscarProdutos}
                    >
                        <input
                            className="w-full px-4 py-2 bg-white rounded-l-md h-10 focus:outline-none"
                            type="search"
                            placeholder="Procurar"
                            id="nome"
                            name="nome"
                            required
                            value={nome}
                            onChange={handleBuscarProdutos}
                        />
                        <button
                            type="submit"
                            className="h-10 w-10 p-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-r-md"
                        >
                            <MagnifyingGlass
                                size={20}
                                weight="bold"
                            />
                        </button>
                    </form>
                </div>

                <div className="flex items-center gap-4 py-4">
                    <Link to="/categorias" className="hover:underline">Categorias</Link>
                    <Link to="/cadastrarCategoria" className="hover:underline">Cadastrar Categoria</Link>
                    
                    <User size={32} weight="bold" />
                    <ShoppingCart size={32} weight="bold" />
                </div>
            </div>
        </header>
    )
}

export default Navbar;