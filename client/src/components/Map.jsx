export default function Map(){
    // Coordinates from the link provided: 54.9522757, -1.5431325
    const src = 'https://maps.google.com/maps?q=54.9522757,-1.5431325&z=13&output=embed'
    return (
      <div className="h-80 w-full overflow-hidden rounded-2xl border border-white/10">
        <iframe
          title="DCR Auto Electrics on Google Maps"
          src={src}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }