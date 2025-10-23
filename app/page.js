'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedStock, setSelectedStock] = useState(null);

  const stocks = [
    {
      name: "Suzlon Energy",
      symbol: "SUZLON",
      cmp: 58.45,
      entry: "55-58",
      target1: 85,
      target2: 120,
      target3: 165,
      sl: 48,
      sector: "Renewable Energy",
      reason: "Strong order book, renewable energy tailwind, debt reduction progress",
      timeframe: "12-18 months",
      risk: "Medium-High"
    },
    {
      name: "Indian Railway Finance Corp",
      symbol: "IRFC",
      cmp: 89.30,
      entry: "85-90",
      target1: 115,
      target2: 145,
      target3: 180,
      sl: 76,
      sector: "Financial Services",
      reason: "Government backing, railway infrastructure growth, stable income model",
      timeframe: "18-24 months",
      risk: "Low-Medium"
    },
    {
      name: "Vodafone Idea",
      symbol: "IDEA",
      cmp: 14.25,
      entry: "12-15",
      target1: 28,
      target2: 45,
      target3: 70,
      sl: 9,
      sector: "Telecom",
      reason: "Sector consolidation, 5G rollout potential, government support expected",
      timeframe: "24-36 months",
      risk: "Very High"
    },
    {
      name: "YES Bank",
      symbol: "YESBANK",
      cmp: 24.80,
      entry: "22-26",
      target1: 40,
      target2: 60,
      target3: 85,
      sl: 19,
      sector: "Banking",
      reason: "Asset quality improvement, stable management, capital infusion completed",
      timeframe: "18-30 months",
      risk: "High"
    },
    {
      name: "NMDC",
      symbol: "NMDC",
      cmp: 72.15,
      entry: "68-74",
      target1: 95,
      target2: 125,
      target3: 160,
      sl: 62,
      sector: "Mining",
      reason: "Iron ore demand, infrastructure push, dividend yield",
      timeframe: "12-18 months",
      risk: "Medium"
    },
    {
      name: "SAIL",
      symbol: "SAIL",
      cmp: 95.40,
      entry: "90-96",
      target1: 125,
      target2: 160,
      target3: 210,
      sl: 82,
      sector: "Steel",
      reason: "Capacity expansion, steel demand surge, government PLI schemes",
      timeframe: "18-24 months",
      risk: "Medium"
    },
    {
      name: "Trident Ltd",
      symbol: "TRIDENT",
      cmp: 38.70,
      entry: "36-40",
      target1: 58,
      target2: 78,
      target3: 105,
      sl: 32,
      sector: "Textile",
      reason: "Export growth, diversified product mix, strong margins",
      timeframe: "12-18 months",
      risk: "Medium"
    },
    {
      name: "RVNL",
      symbol: "RVNL",
      cmp: 88.50,
      entry: "82-90",
      target1: 115,
      target2: 150,
      target3: 195,
      sl: 74,
      sector: "Infrastructure",
      reason: "Railway infrastructure boom, strong order pipeline, execution capability",
      timeframe: "15-24 months",
      risk: "Low-Medium"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px', color: 'white' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
            🚀 Multibagger Stock Picks
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            High-Potential Stocks Under ₹100 with Entry, Target & Stop Loss
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {stocks.map((stock, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedStock(stock)}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: selectedStock === stock ? 'scale(1.02)' : 'scale(1)',
                border: selectedStock === stock ? '3px solid #667eea' : '3px solid transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = selectedStock === stock ? 'scale(1.02)' : 'scale(1)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '4px' }}>
                    {stock.symbol}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#718096' }}>{stock.name}</p>
                </div>
                <div style={{
                  background: '#48bb78',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  ₹{stock.cmp}
                </div>
              </div>

              <div style={{
                background: '#f7fafc',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: '#718096' }}>Entry: </span>
                    <span style={{ fontWeight: 'bold', color: '#2d3748' }}>₹{stock.entry}</span>
                  </div>
                  <div>
                    <span style={{ color: '#718096' }}>SL: </span>
                    <span style={{ fontWeight: 'bold', color: '#e53e3e' }}>₹{stock.sl}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '0.8rem', color: '#718096', marginBottom: '6px' }}>Targets:</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{
                    flex: 1,
                    background: '#c6f6d5',
                    padding: '8px',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#2f855a' }}>T1</div>
                    <div style={{ fontWeight: 'bold', color: '#22543d' }}>₹{stock.target1}</div>
                  </div>
                  <div style={{
                    flex: 1,
                    background: '#bee3f8',
                    padding: '8px',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#2c5282' }}>T2</div>
                    <div style={{ fontWeight: 'bold', color: '#1a365d' }}>₹{stock.target2}</div>
                  </div>
                  <div style={{
                    flex: 1,
                    background: '#fbd38d',
                    padding: '8px',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#c05621' }}>T3</div>
                    <div style={{ fontWeight: 'bold', color: '#7c2d12' }}>₹{stock.target3}</div>
                  </div>
                </div>
              </div>

              <div style={{
                fontSize: '0.8rem',
                color: '#4a5568',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '12px'
              }}>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontWeight: 'bold' }}>Sector:</span> {stock.sector}
                </div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>Risk:</span> {stock.risk}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedStock && (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px', color: '#667eea' }}>
              {selectedStock.symbol} - Detailed Analysis
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div style={{ padding: '15px', background: '#f7fafc', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '8px' }}>Current Market Price</h4>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#48bb78' }}>₹{selectedStock.cmp}</p>
              </div>
              <div style={{ padding: '15px', background: '#f7fafc', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '8px' }}>Potential Upside</h4>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea' }}>
                  {Math.round(((selectedStock.target3 - selectedStock.cmp) / selectedStock.cmp) * 100)}%
                </p>
              </div>
              <div style={{ padding: '15px', background: '#f7fafc', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '8px' }}>Time Horizon</h4>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2d3748' }}>{selectedStock.timeframe}</p>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '10px', color: '#2d3748' }}>
                Investment Rationale
              </h4>
              <p style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                {selectedStock.reason}
              </p>
            </div>

            <div style={{
              background: '#fff5f5',
              border: '1px solid #feb2b2',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '10px'
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '8px', color: '#c53030' }}>
                ⚠️ Risk Disclaimer
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#742a2a', lineHeight: '1.5' }}>
                This is for educational purposes only. Not financial advice. Always do your own research and consult with a certified financial advisor. Past performance doesn't guarantee future results. Risk Level: {selectedStock.risk}
              </p>
            </div>
          </div>
        )}

        <footer style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          color: 'white'
        }}>
          <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
            📊 Data as of October 2025 | Click on any stock for detailed analysis
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>
            Investment carries risks. These picks are based on fundamental and technical analysis but market conditions can change rapidly.
          </p>
        </footer>
      </div>
    </div>
  );
}
