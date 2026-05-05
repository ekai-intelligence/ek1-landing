import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Private AI for Financial Services deployed in your cloud'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  const svgContent = `<svg width="80" height="80" viewBox="-5 -1.5 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2384 14.1371C9.81386 13.7067 9.34405 13.3559 8.84378 13.0817C8.45335 12.8684 8.33151 12.322 8.64533 12.0039L10.2384 10.3872C12.5773 8.01446 12.5773 4.15225 10.2384 1.77954C7.89954 -0.593179 4.09307 -0.593179 1.75417 1.77954C-0.584724 4.15225 -0.584724 8.01446 1.75417 10.3872C2.16952 10.8082 2.62364 11.1553 3.11007 11.4238C3.49496 11.6362 3.6251 12.1733 3.3242 12.497L2.07169 13.8415C1.96093 13.9397 1.85016 14.0379 1.75325 14.1362C1.57695 14.3149 1.41451 14.5011 1.26775 14.6929C1.0453 14.982 1.17176 15.3927 1.50127 15.5433L2.5978 16.0458L4.00907 16.6913L4.15583 16.7568C4.20014 16.7765 4.24813 16.7606 4.28505 16.7306C4.29336 16.7231 4.30444 16.7166 4.31182 16.7082C5.25421 15.7651 6.76702 15.7698 7.69094 16.7203C8.10814 17.1432 8.34259 17.6999 8.38689 18.2622C8.4072 18.5233 8.54195 18.7731 8.77732 18.8807L11.1116 19.9473C11.4411 20.0979 11.8297 19.922 11.8962 19.5618C12.2506 17.6578 11.6986 15.606 10.2384 14.1371ZM5.98523 9.36361V8.90891C5.97969 8.88552 5.976 8.86119 5.976 8.83593C5.976 8.6619 5.8357 8.5225 5.66495 8.49911C5.43604 8.46823 5.20991 8.40274 4.99392 8.3045C4.97269 8.29514 4.95146 8.28579 4.93023 8.27643C4.92931 8.27643 4.92747 8.2755 4.92654 8.27456C4.65333 8.14919 4.39581 7.97516 4.17152 7.74875C4.16968 7.74687 4.17152 7.74313 4.17337 7.74313C4.17522 7.74313 4.17706 7.73939 4.17522 7.73752C3.1756 6.71864 3.17745 5.07383 4.18075 4.07179C5.18591 3.0529 6.81132 3.0529 7.8017 4.07179C8.80686 5.09067 8.80686 6.73828 7.8017 7.7422L6.20675 9.45156C6.12645 9.53764 5.98431 9.47963 5.98431 9.36174L5.98523 9.36361Z" fill="#F37640"/></svg>`
  const logoSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(145deg, #0A0C18 0%, #0D0F1D 60%, #100C18 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 96px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative orb — top right */}
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'rgba(224, 101, 48, 0.10)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 80,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'rgba(224, 101, 48, 0.07)',
          }}
        />

        {/* Subtle left accent line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: 'linear-gradient(to bottom, transparent, #e06530 40%, #e06530 60%, transparent)',
          }}
        />

        {/* Brand mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'auto' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={44} height={44} alt="ekai icon" />
          <span
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: '#54A4A0',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            ekai
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            Private AI for Financial Services
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: '#e06530',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            deployed in your cloud.
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.55,
            maxWidth: 820,
            marginBottom: 56,
          }}
        >
          Deploy secure, sovereign AI applications within your infrastructure. Empower your teams to use AI for sensitive workflows without compromising on security or compliance.
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e06530' }} />
            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
              Private · Sovereign · Compliant
            </span>
          </div>
          <span
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            yourekai.com
          </span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(to right, #e06530, rgba(224,101,48,0.2))',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
