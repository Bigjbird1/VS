import PaymentEscrow from '@/components/PaymentEscrow';

export default function PaymentEscrowPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6">Payment & Escrow</h1>
        <p className="mb-8 text-gray-600">Listing ID: {params.id}</p>
        <PaymentEscrow listingId={params.id} />
      </div>
    </div>
  );
}

