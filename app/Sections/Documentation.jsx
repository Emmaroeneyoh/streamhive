import React from "react";

const Documentation = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center mb-6'>
          Comprehensive Documentation for Developers
        </h1>
        <p className='text-lg text-center mb-8'>
          Simplify Integration, Accelerate Development
        </p>
        <p className='text-gray-600 text-center mb-8'>
          Our detailed API documentation is designed to provide developers with
          everything they need to seamlessly integrate our TURN server
          capabilities into their applications. From simple cURL commands to
          advanced payload customization, we’ve got you covered.
        </p>

        <section className='mb-10'>
          <h2 className='text-2xl font-semibold mb-4'>Request Example</h2>
          <div className='bg-gray-900 text-white p-4 rounded-lg overflow-x-auto'>
            <pre className='whitespace-pre-line'>
              {`curl -X POST https://turnserver-vqwh.onrender.com/user/steamhive/request/session \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "email": "kingdev@gmail.com"
}'`}
            </pre>
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-2xl font-semibold mb-4'>Response Example</h2>
          <div className='bg-gray-900 text-white p-4 rounded-lg overflow-x-auto'>
            <pre className='whitespace-pre-line'>
              {`{
  "session_id": "abc123xyz",
  "expires_at": "2024-11-25T12:00:00Z",
  "turn_server": {
    "ip": "203.0.113.10",
    "port": 3478,
    "credentials": {
      "username": "user123",
      "apikey": "27363648"
    },
    "protocols": ["UDP", "TCP"],
    "tls": {
      "enabled": true
    }
  }
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
