import SharedContactForm from "@/components/forms/SharedContactForm";

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <SharedContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
