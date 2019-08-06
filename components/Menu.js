import Link from "next/link";

export default () => <nav className="main-nav stickybits">
    <div className="container">
        <ul>
            <li><Link href="#accompagnement">Accompagnement</Link></li>
            <li><Link href="">Consultation</Link></li>
            <li><Link href="">Développement Web</Link></li>
            <li><Link href="">Blabla</Link></li>
            <li><Link href="">F.A.Q.</Link></li>
            <li><Link href="">Contact</Link></li>
        </ul>
    </div>
</nav>
