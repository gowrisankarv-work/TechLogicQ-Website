/** Renders a JSON-LD structured data block. `data` can be a single object or an array of them. */
export default function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
