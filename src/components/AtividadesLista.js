import React, { useMemo, useState } from 'react'
import Atividade from './Atividade';

export default function AtividadeLista(props) {
    
    return (
        <div className='mt-3'>
            <ul>
                {props.atividades.map((ativ) => (

                    <li>
                        <Atividade
                            key={ativ.id}
                            ativ={ativ}
                            deletarAtividade={props.deletarAtividade}
                            pegarAtividade={props.pegarAtividade}
                        />
                    </li>

                ))}
            </ul>

        </div>
    );
}
