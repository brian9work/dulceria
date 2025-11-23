import React from 'react'

export default function Form({ formData, setFormData }: {
    formData: { name: string; lastName: string; phone: string; street: string; numerHome: string; cologne: string; };
    setFormData: React.Dispatch<React.SetStateAction<{ name: string; lastName: string; phone: string; street: string; numerHome: string; cologne: string; }>>
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className='p-4'>
            <h3 className='text-lg font-bold text-pink-500 mb-4'>Datos de Envío</h3>
            <form className='space-y-3'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm border p-2'
                            placeholder="Nombre"
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Apellido</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm border p-2'
                            placeholder="Apellido"
                        />
                    </div>
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>Teléfono</label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm border p-2'
                        placeholder="Teléfono"
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>Calle</label>
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm border p-2'
                        placeholder="Calle"
                    />
                </div>

                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Número</label>
                        <input
                            type="number"
                            name="numerHome"
                            value={formData.numerHome}
                            onChange={handleChange}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm border p-2'
                            placeholder="Número"
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Colonia</label>
                        <input
                            type="text"
                            name="cologne"
                            value={formData.cologne}
                            onChange={handleChange}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm border p-2'
                            placeholder="Colonia"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
