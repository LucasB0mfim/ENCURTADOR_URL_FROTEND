const API_URL = 'https://encurtador-url-dfhs.onrender.com/api';

interface EncurtarURLResponse {
    id: number;
    originalURL: string;
    shortURL: string;
}

export const encurtarURL = async (urlOriginal: string): Promise<EncurtarURLResponse> => {
    try {
        const response = await fetch(`${API_URL}/encurtar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urlOriginal }),
        });
        if (!response.ok) {
            throw new Error('Erro ao encurtar URL');
        }
        return response.json();
    } catch (error) {
        console.error('Erro ao encurtar URL:', error);
        throw error;
    }
};
