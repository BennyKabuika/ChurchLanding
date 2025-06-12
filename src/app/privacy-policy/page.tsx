import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Clock } from "lucide-react";
import { colors } from "../color";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen px-4 py-16 flex flex-col items-center">
        <div className="mb-6 mt-20">
                <span className="px-4 py-2 rounded-full border border-gray-700 text-white text-sm font-medium" style={{background: colors.Primary3}}>
                  Politiques de confidentialité
                </span>
              </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-instrument">
          Nos Politique de confidentialité
        </h1>
        <p className="text-gray-400 text-center mb-8 max-w-2xl">
          Notre politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles. Votre confidentialité et votre sécurité sont nos priorités.
        </p>
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-gray-300 text-sm">
            <Clock className="w-5 h-5" />
            Dernière mise à jour le 12 juin 2025
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 max-w-2xl w-full mb-8">
          <p className="mb-2 text-2xl font-semibold text-white">Ce site web est édité par</p>
          <p className="mb-1 text-gray-300">MKDynamics SRL</p>
          <p className="mb-1 text-gray-300">Avenue Jean de Bologne 9, 1020 Brussels</p>
          <p className="mb-1 text-gray-300">www.mkdynamics.be</p>
          <p className="mb-4 text-gray-300">+32 475 44 03 47</p>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Informations que nous collectons</h2>
          <p className="mb-4 text-gray-300">
            Nous pouvons recueillir des informations personnelles lorsque vous visitez notre site web, créez un compte ou utilisez nos services. Ces informations peuvent inclure votre nom, votre adresse e-mail, vos coordonnées et toute autre information que vous nous fournissez volontairement.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Comment nous utilisons vos informations</h2>
          <p className="mb-2 text-gray-300">
            Nous pouvons utiliser les informations que nous collectons auprès de vous à diverses fins, notamment :
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-300">
            <li>Fournir et améliorer nos produits et services ;</li>
            <li>Personnaliser votre expérience sur notre site web ;</li>
            <li>Communiquer avec vous au sujet de votre compte et des mises à jour ou promotions ;</li>
            <li>Analyser le trafic et le comportement des utilisateurs afin d&apos;améliorer nos offres.</li>
          </ol>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Sécurité des données</h2>
          <p className="mb-4 text-gray-300">
            Nous prenons la sécurité des données très au sérieux et utilisons des mesures conformes aux normes du secteur pour protéger vos informations personnelles contre tout accès, divulgation, altération ou destruction non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est sûre à 100 %, et nous ne pouvons garantir une sécurité absolue.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Divulgation à des tiers</h2>
          <p className="mb-4 text-gray-300">
            Nous ne vendons, n&apos;échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf si la loi l&apos;exige ou si cela est nécessaire à la fourniture de nos services. Nous pouvons partager vos informations avec des prestataires de services tiers de confiance qui nous aident à exploiter notre site web, à mener nos activités ou à vous fournir des services, à condition qu&apos;ils s&apos;engagent à préserver la confidentialité de vos informations.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Cookies</h2>
          <p className="mb-4 text-gray-300">
            Notre site web peut utiliser des cookies pour améliorer votre expérience de navigation et recueillir des informations sur vos interactions avec notre site. Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti(e) de leur envoi, mais certaines fonctionnalités du site risquent de ne pas fonctionner correctement sans cookies.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-white">Modifications de la politique de confidentialité</h2>
          <p className="mb-4 text-gray-300">
            Nous nous réservons le droit de mettre à jour ou de modifier cette Politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et sa date d&apos;entrée en vigueur sera mise à jour en conséquence. Nous vous encourageons à consulter régulièrement cette Politique de confidentialité pour prendre connaissance des éventuelles mises à jour.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Nous contacter</h2>
          <p className="mb-2 text-gray-300">
            Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou le traitement de vos informations personnelles, veuillez nous contacter à <a href="mailto:contact@mkdynamics.be" className="underline text-white">contact@mkdynamics.be</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
