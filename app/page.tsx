'use client';

import { useState } from 'react';

export default function Home() {
    const [bonus, setBonus] = useState(1250);
    const [showQR, setShowQR] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);

    // ИИ-совет (по времени суток)
    const getAIAdvice = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Доброе утро! ☀️ Рекомендуем раф с ванилью.';
        if (hour < 18) return 'День в разгаре! ☕️ Ваш любимый капучино ждёт вас.';
        return 'Хорошего вечера! 🌙 Попробуйте лавандовый раф.';
    };

    // Бонус-рулетка
    const spinRoulette = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        let spins = 0;
        const interval = setInterval(() => {
            const randomBonus = Math.floor(Math.random() * 50) + 10;
            setBonus(prev => prev + randomBonus);
            spins++;

            if (spins >= 10) {
                clearInterval(interval);
                setIsSpinning(false);
            }
        }, 100);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#fef3c7',
            padding: '20px',
            fontFamily: 'system-ui, sans-serif'
        }}>
            {/* ИИ-Бариста */}
            <div style={{
                backgroundColor: '#fde68a',
                padding: '16px',
                borderRadius: '20px',
                marginBottom: '20px',
                borderLeft: '4px solid #d97706'
            }}>
                <p style={{ margin: 0, color: '#78350f' }}>
                    🤖 <strong>ИИ-Бариста:</strong> {getAIAdvice()}
                </p>
            </div>

            {/* Карта лояльности */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '24px',
                marginBottom: '20px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 0,
                    color: '#374151'
                }}>
                    ☕️ Моя кофейня
                </h1>

                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <p style={{ color: '#6b7280', margin: 0 }}>Бонусный баланс</p>
                    <p style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#b45309',
                        margin: '8px 0'
                    }}>
                        {bonus}
                    </p>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                        = {Math.floor(bonus / 10)} рублей на кофе
                    </p>
                </div>

                <button
                    onClick={() => setShowQR(!showQR)}
                    style={{
                        width: '100%',
                        backgroundColor: '#b45309',
                        color: 'white',
                        border: 'none',
                        padding: '16px',
                        borderRadius: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {showQR ? '🔒 Скрыть код' : '🍪 Я сделал заказ'}
                </button>

                {showQR && (
                    <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        backgroundColor: '#f3f4f6',
                        borderRadius: '16px',
                        textAlign: 'center'
                    }}>
                        <p style={{ marginBottom: '12px', color: '#4b5563' }}>
                            Покажите этот код баристе:
                        </p>
                        <code style={{
                            display: 'inline-block',
                            backgroundColor: 'white',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            color: '#b45309'
                        }}>
                            COFFEE_{bonus}
                        </code>
                    </div>
                )}
            </div>

            {/* Бонус-рулетка */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '32px' }}>🎡</span>


                    <div>
                        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Бонус-рулетка</h3>
                        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
                            Крутите каждый день и получайте бонусы
                        </p>
                    </div>
                </div>

                <button
                    onClick={spinRoulette}
                    disabled={isSpinning}
                    style={{
                        width: '100%',
                        backgroundColor: isSpinning ? '#9ca3af' : '#059669',
                        color: 'white',
                        border: 'none',
                        padding: '14px',
                        borderRadius: '14px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginTop: '16px',
                        cursor: isSpinning ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isSpinning ? '🎲 Крутим...' : '✨ Крутить рулетку'}
                </button>
            </div>
        </div>
    );
}


