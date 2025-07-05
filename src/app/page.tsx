"use client";
import SmoothScroll from "./components/smoothScroll";
import Image from "next/image";
export default function Home() {
  return (
    <SmoothScroll>
      <main className="{styles.main} font-sans text-gray-800">
        {/* //!Hero Section */}
        <section className="data-scroll-section relative h-screen flex items-center justify-center px-4  text-hero-font bg-hero-background bg-cover bg-center overflow-hidden">
          {/* <div className="blob1 absolute z-0"> Parallax </div>
        <div className="blob2 absolute overflow-clip z-0"> Parallax </div> */}
          {/* //!The moving blobs */}
          <div className="hero-1 absolute" />
          <div className="hero-01 absolute" />
          <div className="hero-2 absolute" />
          <div className="hero-02 absolute" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl text-hero-font font-extrabold mb-6 leading-tight drop-shadow-lg">
              Healing Begins Here
            </h1>
            <h2 className="text-xl text-burgundy md:text-2xl mb-8 drop-shadow-md">
              Personalized therapy with Dr. Serena Blake, PsyD
            </h2>
            <a
              href="#contact"
              className="inline-block text-hero-font font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-burgundy shadow-md hover:text-hero-background"
            >
              Book a Free Consult
            </a>
          </div>
        </section>

        {/* //!About Section */}
        <section className="data-scroll-section min-h-screen bg-x11">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6 py-12">
            <div className="flex-shrink-0 py-10 md:py-20">
              <Image
                className="w-[250px] h-[350px] md:w-[300px] md:h-[450px] rounded-xl object-cover shadow-lg mx-auto"
                src="/Serena.jpg"
                width={300}
                height={450}
                alt="Dr. Serena Blake"
              />
            </div>

            <div className="text-oliveSmoke text-center md:text-left space-y-5 px-2 md:px-0">
              <h2 className="text-3xl md:text-4xl font-bold text-hero-font">
                Dr. Serena Blake, PsyD
              </h2>
              <p className="text-lg md:text-xl text-oliveSmoke">
                Clinical Psychologist – Los Angeles, CA
              </p>
              <div className="text-oliveSmoke text-base leading-relaxed">
                <p>
                  Finding time and opportunities to care for ourselves can be
                  incredibly challenging in today's busy and demanding world. I
                  believe therapy offers a dedicated space for self-care,
                  providing the support and tools needed to improve this
                  essential practice. Therapy can help individuals identify and
                  clarify their goals, values, and the various elements that
                  contribute to their well-being, recognizing that these aspects
                  vary from person to person.
                </p>
                <p className="mt-4">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                  based in Los Angeles, CA, with eight years of experience and
                  over 500 client sessions. She blends evidence-based
                  approaches—like cognitive-behavioral therapy and
                  mindfulness—with compassionate, personalized care to help you
                  overcome anxiety, strengthen relationships, and heal from
                  trauma. Whether you meet in her Maplewood Drive office or
                  connect virtually via Zoom, Dr. Blake is committed to creating
                  a safe, supportive space for you to thrive.
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr className="w-4/5 md:w-[800px] h-1 mx-auto my-4 bg-about-font border-0 rounded-sm md:my-10 dark:bg-gray-700" />
          </div>
        </section>
        
        {/* //!Services Section */}
        <section
          className="data-scroll-section group py-20 px-6 md:px-20 bg-hero-background "
          id="services"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
          <div className=" grid md:grid-cols-3 gap-10">
            <div className="hover:-translate-y-1 hover:scale-105 text-center rounded-xl p-2 transition delay-50 duration-300 ease-in-out ">
              <img
                src="./Management.jpg"
                alt="Anxiety Management"
                className=" w-full h-56 p-1px object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Anxiety & Stress Management
              </h3>
              <p>
                Learn tools to manage overwhelming thoughts, build resilience,
                and restore balance. Therapy focuses on CBT techniques,
                mindfulness, and nervous system regulation for daily calm.
              </p>
            </div>
            <div className="hover:-translate-y-1 hover:scale-105  text-center rounded-xl p-2 transition delay-50 duration-300 ease-in-out">
              <img
                src="./Relationship.jpg"
                alt="Relationship Counseling"
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Relationship Counseling
              </h3>
              <p>
                Whether you’re facing conflict or disconnection, couples therapy
                offers tools to improve communication, rebuild trust, and deepen
                emotional intimacy in your relationship.
              </p>
            </div>
            <div className="hover:-translate-y-1 hover:scale-105 text-center  rounded-xl p-2 transition delay-50 duration-300 ease-in-out">
              <img
                src="/Trauma.jpg"
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Trauma Recovery</h3>
              <p>
                Work through past traumas in a supportive space using
                evidence-based therapies. Gain empowerment, self-understanding,
                and healing at your own pace.
              </p>
            </div>
          </div>
        </section>

        {/* //!FAQ Section */}
        <section
          className="data-scroll-section py-20 bg-x11  px-6 md:px-20"
          id="faq"
        >
          <h2 className="text-3xl font-bold text-center text-mountainside mb-10">
            FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="cursor-pointer font-semibold">
                Do you accept insurance?
              </summary>
              <p className="mt-2 text-gray-700">
                No, but a superbill is provided for self-submission.
              </p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="cursor-pointer font-semibold">
                Are online sessions available?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes—all virtual sessions are conducted via Zoom.
              </p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="cursor-pointer font-semibold">
                What is your cancellation policy?
              </summary>
              <p className="mt-2 text-gray-700">
                24-hour notice is required to avoid cancellation fees.
              </p>
            </details>
          </div>
        </section>

        {/* //!Contact Section */}
        <section
          className="data-scroll-section py-20 bg-hero-background text-sprout px-6 md:px-20"
          id="contact"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Contact Dr. Blake
          </h2>
          <form className="max-w-3xl mx-auto grid text-red-50 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className=" border-2 text-black border-vanillaDust p-3 rounded-md shadow-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className=" border-2 text-black border-vanillaDust p-3 rounded-md shadow-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className=" border-2 text-black border-vanillaDust p-3 rounded-md shadow-md"
            />
            <textarea
              name="message"
              placeholder="What brings you here?"
              required
              className=" border-2 text-black border-vanillaDust p-3 rounded-md h-32 shadow-md"
            ></textarea>
            <input
              type="text"
              name="preferredTime"
              placeholder="Preferred time to reach you"
              required
              className=" border-2 text-black border-vanillaDust p-3 rounded-md shadow-md"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                required
                className="w-4 h-4"
              />
              <span className="text-black">I agree to be contacted</span>
            </label>
            <button
              type="submit"
              className="text-hero-font font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-burgundy shadow-md hover:text-hero-background"
            >
              Submit
            </button>
          </form>
        </section>

        {/* //!Footer */}
        <footer className="text-center py-8 bg-gray-100 text-sm text-gray-600">
          &copy; 2025 Dr. Serena Blake, PsyD | 1287 Maplewood Drive, Los
          Angeles, CA | (323) 555-0192
        </footer>
      </main>
    </SmoothScroll>
  );
}
