import style from "./FirewallZones.module.css";

export default function FirewallZones() {
  return (
    <div className={style.container}>
      <div className={style.zones}>
        <div className={`${style.zone} ${style.untrusted}`}>
          <div className={style.zoneName}>Internet (untrusted)</div>
          <div className={style.zoneDesc}>
            Öffentliches Netz, nicht vertrauenswürdig
          </div>
        </div>

        <div className={style.firewall}>
          <div className={style.firewallLine} />
          <span>🔥 Firewall</span>
          <div className={style.firewallLine} />
        </div>

        <div className={style.arrow}>↕</div>

        <div className={`${style.zone} ${style.dmz}`}>
          <div className={style.zoneName}>DMZ — Demilitarized Zone</div>
          <div className={style.zoneDesc}>
            Webserver, Mailserver, öffentlich zugängliche Dienste
          </div>
        </div>

        <div className={style.firewall}>
          <div className={style.firewallLine} />
          <span>🔥 Firewall</span>
          <div className={style.firewallLine} />
        </div>

        <div className={style.arrow}>↕</div>

        <div className={`${style.zone} ${style.trusted}`}>
          <div className={style.zoneName}>Internes Netz (trusted)</div>
          <div className={style.zoneDesc}>
            Mitarbeiter, interne Server, Datenbanken
          </div>
        </div>
      </div>
    </div>
  );
}
