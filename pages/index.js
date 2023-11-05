export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000');
    const data = await res.json();

    return {
        props: {
            speed: data
        }
    }
}

export default function Home({ speed }) {
    return (
        <div>
            <h1>WiFi Speed Test Results</h1>
            <p>Download speed: {speed.download}</p>
            <p>Upload speed: {speed.upload}</p>
        </div>
    )
}
