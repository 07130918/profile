import { ImageResponse } from 'next/og';
import { PROFILE } from '@/lib/profile-data';

export const alt = `${PROFILE.name} — Software Engineer Portfolio`;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '64px 72px',
                backgroundColor: '#0B0E14',
                backgroundImage:
                    'radial-gradient(circle at 85% 15%, rgba(77, 159, 255, 0.22), transparent 45%)',
                color: '#F8FAFC',
                fontFamily: 'sans-serif',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '24px',
                    color: '#4D9FFF',
                    letterSpacing: '0.02em',
                }}
            >
                <div
                    style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '9999px',
                        backgroundColor: '#4D9FFF',
                    }}
                />
                <span>{PROFILE.brand}</span>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                    }}
                >
                    {PROFILE.name}
                </div>
                <div
                    style={{
                        fontSize: '30px',
                        color: '#CBD5E1',
                        lineHeight: 1.4,
                        maxWidth: '920px',
                    }}
                >
                    Software Engineer in Tokyo — Full-Stack Web Apps, APIs &
                    NashForge (GTO Poker Trainer)
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                    paddingTop: '24px',
                    fontSize: '22px',
                    color: '#94A3B8',
                }}
            >
                <span>TypeScript · Next.js · React · Python · AWS</span>
                <span style={{ color: '#34D399' }}>
                    profile.k0ta.dev · poker.k0ta.dev
                </span>
            </div>
        </div>,
        size,
    );
}
