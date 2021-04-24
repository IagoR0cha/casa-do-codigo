import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';

const CellDeleta = ({removeDados, id, tipo}) => {
    if (!removeDados) {
        return null;
    }
    if (tipo === 'titulo'){
        return <TableCell>Remover</TableCell>;
    }

    return (
        <TableCell>
            <Button variant="contained" color="secondary" onClick={() => { removeDados(id) }}>Remover</Button>
        </TableCell>
    );
}
    


const Tabela = props => {
    const { dados, removeDados, campos } = props;
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {
                        campos.map((campo, index) => (
                            <TableCell key={index}>{campo.titulo}</TableCell>
                        ))
                    }
                    <CellDeleta removeDados={removeDados} tipo='titulo'/>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map(dado => (
                        <TableRow key={dado.id}>
                            {campos.map((campo, index) => (
                                <TableCell key={index}>{dado[campo.dado]}</TableCell>
                            ))}

                            <CellDeleta id={dados.id} removeDados={removeDados} />
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Tabela;