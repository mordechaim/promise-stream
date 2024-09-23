import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>
        Using a client-side promise on initial render causes the returned HTML
        to not complete the stream.
        <br />
        <br />
        You can see it in action by looking in the Network tab under the
        document Response tab. The browser loading indicator keeps spinning.
      </p>
      <ul>
        <li>
          <Link href='/suspend'>Soft navigation (works)</Link>
        </li>
        <li>
          <a href='/suspend'>Hard navigation (hangs in stream)</a>
        </li>
      </ul>
    </>
  );
}
