export function GoogleMap() {
  return (
    <div className="flex min-h-96 items-center justify-center overflow-hidden border-2 border-gray-600 bg-white">
      <iframe
        width="720"
        height="450"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48436.64188831274!2d-2.7710844296716486!3d54.19141231899572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c852d97d140b1%3A0xd7ad7f426e08e941!2sLakeland+Wildlife+Oasis!5e0!3m2!1sen!2suk!4v1553386833427"
      />
    </div>
  );
}
