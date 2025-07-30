import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface InfoUiProps {
    apellidos?: string;
    nombres?: string;
    paralelo?: string;
}

export default function Student( prop: InfoUiProps ) {
    return (
        <>
            <Typography component="p" variant="h4">
                {/* REALIZADO: Renderice los props apellidos y nombres */}
                {prop.nombres} {prop.apellidos}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* REALIZADO: Renderice el paralelo */}
                Paralelo # {prop.paralelo}

            </Typography>
        </>
    )
}
