import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "@/lib/api";
import { ArrowRight } from "lucide-react";

interface QuoteFormProps {
  onSuccess?: () => void;
  className?: string;
  title?: string;
  subtitle?: string;
  horizontal?: boolean;
  singleColumn?: boolean;
}

const QuoteForm = ({ onSuccess, className, title = "Get Your Best Deal", subtitle = "Fill the form and we'll contact you in 24h.", horizontal = false, singleColumn = false }: QuoteFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newErrors: Record<string, string[]> = {};
    if (!data.full_name || (data.full_name as string).trim().length < 3) {
      newErrors.full_name = ["Name must be at least 3 characters."];
    }
    if (!data.phone || (data.phone as string).trim().length !== 10) {
      newErrors.phone = ["Mobile number must be exactly 10 digits."];
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      newErrors.email = ["Please enter a valid email address."];
    }
    if (!data.arrival_date) {
      newErrors.arrival_date = ["Please select a travel date."];
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      setErrors({});
      await api.post("/store-enquiries", data);
      toast.success("Request received!", {
        description: "One of our experts will call you shortly.",
      });
      (e.target as HTMLFormElement).reset();
      onSuccess?.();
      navigate("/thank-you");
    } catch (error: any) {
      console.error("Form submission error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error(error.response?.data?.message || "Something went wrong", {
        description: "Please try again later or call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${horizontal ? 'bg-transparent p-2 md:p-3' : 'rounded-sm md:rounded-sm bg-white p-5 md:p-7'} ${className || ''}`}>
      {!horizontal && (
        <div className="mb-5 md:mb-7">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          <p className="mt-1.5 text-[14px] md:text-[15px] font-normal text-muted-foreground">{subtitle}</p>
        </div>
      )}

      <form noValidate onSubmit={onSubmit} className={horizontal ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3" : "grid gap-3 md:gap-4"}>
        {!horizontal && (
          <div className="grid gap-3 md:gap-4 grid-cols-2">
            <div className="space-y-1 md:space-y-1.5">
              <label className="text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground/100" htmlFor="quote-name">Full Name</label>
              <input
                id="quote-name"
                name="full_name"
                className={`w-full rounded-sm border bg-brand-cream/60 px-4 py-2 md:py-3 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors ${errors.full_name ? 'border-red-500' : 'border-border'}`}
                placeholder="John Doe"
                required
                minLength={3}
              />
              {errors.full_name && <p className="text-[10px] text-red-500 mt-1">{errors.full_name[0]}</p>}
            </div>
            <div className="space-y-1 md:space-y-1.5">
              <label className="text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground/100" htmlFor="quote-mobile">Mobile Number</label>
              <input
                id="quote-mobile"
                name="phone"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                className={`w-full rounded-sm border bg-brand-cream/60 px-4 py-2 md:py-3 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors ${errors.phone ? 'border-red-500' : 'border-border'}`}
                placeholder="9876543210"
                required
                minLength={10}
                maxLength={10}
              />
              {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone[0]}</p>}
            </div>
          </div>
        )}

        {horizontal && (
          <>
            <div className="space-y-1 w-full">
              <input
                name="full_name"
                className={`w-full rounded-sm border-none bg-white px-4 py-3 md:py-4 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.full_name ? 'ring-2 ring-red-500' : ''}`}
                placeholder="Full Name"
                required
                minLength={3}
              />
            </div>
            <div className="space-y-1 w-full">
              <input
                name="email"
                type="email"
                className={`w-full rounded-sm border-none bg-white px-4 py-3 md:py-4 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                placeholder="Email Address"
                required
              />
            </div>
          </>
        )}

        <div className={horizontal ? "space-y-1 w-full" : `grid gap-3 md:gap-4 ${singleColumn ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {!horizontal ? (
            <>
              <div className="space-y-1 md:space-y-1.5">
                <label className="text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground/100" htmlFor="quote-email">Email Address</label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  className={`w-full rounded-sm border bg-brand-cream/60 px-4 py-2 md:py-3 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                  placeholder="john@example.com"
                  required
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email[0]}</p>}
              </div>
              <div className="space-y-1 md:space-y-1.5">
                <label className="text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground/100" htmlFor="quote-date">Travel Date</label>
                <input
                  id="quote-date"
                  name="arrival_date"
                  type="date"
                  min={minDate}
                  className={`w-full rounded-sm border bg-brand-cream/60 px-4 py-2 md:py-3 text-[14px] md:text-[15px] font-medium text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors ${errors.arrival_date ? 'border-red-500' : 'border-border'}`}
                  required
                />
                {errors.arrival_date && <p className="text-[10px] text-red-500 mt-1">{errors.arrival_date[0]}</p>}
              </div>
            </>
          ) : (
            <input
              name="phone"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
              }}
              className={`w-full rounded-sm border-none bg-white px-4 py-3 md:py-4 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
              placeholder="Mobile Number"
              required
              minLength={10}
              maxLength={10}
            />
          )}
        </div>

        {horizontal && (
          <div className="space-y-1 w-full">
            <input
              name="arrival_date"
              type="date"
              min={minDate}
              className={`w-full rounded-sm border-none bg-white px-4 py-3 md:py-4 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.arrival_date ? 'ring-2 ring-red-500' : ''}`}
              required
            />
          </div>
        )}

        {!horizontal && (
          <div className="space-y-1 md:space-y-1.5">
            <label className="text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground/100" htmlFor="quote-msg">Special Requirements</label>
            <textarea
              id="quote-msg"
              name="message"
              rows={3}
              className={`w-full rounded-sm border bg-brand-cream/60 px-4 py-2 md:py-3 text-[14px] md:text-[15px] font-medium text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
              placeholder="e.g. Dietary needs, accessible room..."
            />
            {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message[0]}</p>}
          </div>
        )}

        <div className={horizontal ? "w-full" : "mt-2"}>
          <button type="submit" disabled={loading} className={`btn-primary w-full ${horizontal ? 'rounded-sm h-full shadow-lg' : 'py-2.5 md:py-3.5 shadow-lg'} disabled:opacity-70 transition-all`}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending...
              </span>
            ) : (
              <>
                {horizontal ? 'Get Quote' : 'Send the Request'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
