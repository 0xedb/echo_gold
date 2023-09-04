import * as React from 'react'

export function useUserId() {
    const [id, setId] = React.useState('')

    React.useEffect(() => {
        const idInput = document.querySelector(
            'input[type="hidden"]',
        ) as HTMLInputElement;

        setId(idInput.value)
    }, []);

    return id
}