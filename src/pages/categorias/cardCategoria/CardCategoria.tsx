import { Link } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({categoria}: Readonly<CardCategoriaProps>) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-slate-700  text-white font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-white h-full'>{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-teal-600 hover:bg-teal-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;