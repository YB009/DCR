export default function Map(){
    return (
      <div className="h-80 w-full overflow-hidden rounded-2xl border border-white/10">
        <iframe
          title="DCR Auto Electrics on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d146636.60614963956!2d-1.54286808521983!3d54.95210554642574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e707606596df3%3A0xf0b0202a3df67e25!2sDCR%20Auto%20Electrics!5e0!3m2!1sen!2sng!4v1755035374603!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }