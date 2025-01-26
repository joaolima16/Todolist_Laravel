'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';

interface SnackbarProviderProps {
    variant: VariantType;
    message: string
}
const Snackbar = ({ variant, message }: SnackbarProviderProps) => {
    const { enqueueSnackbar } = useSnackbar();
    const handleClick = (variant: VariantType) => () => {

        enqueueSnackbar(`${message}`, { variant });
    };
    useEffect(() => {

        handleClick(variant)();
    }, [])
    return (
        <>
        </>
    )
}
export default Snackbar;