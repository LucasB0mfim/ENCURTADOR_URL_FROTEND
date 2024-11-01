import React, { useState } from 'react';
import { encurtarURL } from '../../services/api';
import * as S from './styles';
import send from '../../assets/images/send.png';
import Loader from '../Loader';

const Form: React.FC = () => {
    const [urlOriginal, setUrlOriginal] = useState('');
    const [urlCurta, setUrlCurta] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [copiedMessage, setCopiedMessage] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setUrlCurta('');
        setCopiedMessage(false); // Reseta a mensagem ao enviar uma nova URL
        try {
            const data = await encurtarURL(urlOriginal);
            setUrlCurta(data.shortURL);
        } catch (error) {
            console.error('Erro ao encurtar URL:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://encurtador-url-dfhs.onrender.com/api/${urlCurta}`)
            .then(() => {
                setCopiedMessage(true); // Exibe a mensagem "Copiado!"
            })
            .catch(err => {
                console.error('Erro ao copiar URL:', err);
            });
    };

    return (
        <S.Container>
            <S.FormBar onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder='Cole sua URL aqui'
                    value={urlOriginal}
                    onChange={(e) => setUrlOriginal(e.target.value)}
                />
                <S.SendButton type="submit">
                    <img src={send} alt="Enviar" />
                </S.SendButton>
                {isLoading && <Loader />}
                {!isLoading && urlCurta && (
                    <>
                      <Loader />
                      <S.DivCopy>
                          <S.CopyButton onClick={handleCopy}>Copiar link</S.CopyButton>
                      </S.DivCopy>
                      {copiedMessage && <p>Copiado!</p>}
                    </>
                )}
            </S.FormBar>
        </S.Container>
    );
};

export default Form;
