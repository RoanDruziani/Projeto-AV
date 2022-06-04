import React from 'react'

export default function Atividade(props) {

    return (
        <div 
        className={'card mb-2 shadow'}>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        <span className='badge bg-secondary me-1'>
                            {props.ativ.id}
                        </span>
                        - {props.ativ.name}
                    </h5>
                </div>
                <p className='card-text'> {props.ativ.email}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-outline-primary me-2 '
                    onClick={() => props.pegarAtividade(props.ativ.id)}>
                
                        <i className="fas fa-pen me-2"></i>
                        
                        Editar
                    </button>
                    <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => props.deletarAtividade(props.ativ.id)}>
                        <i className='fas fa-trash me-2'></i>
                        Deletar
                    </button>
                </div>
            </div>
        </div>

    )
}
