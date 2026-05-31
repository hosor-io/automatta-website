"use client";
import React from "react";
import {
  Search, Star, MapPin, Check, ChevronRight, Plus, MessageSquare,
  Navigation, FileText, Clock, Wrench, Truck, Calendar, CreditCard,
  QrCode, ShoppingBag, ChefHat, Package, RefreshCw, Leaf, Users,
  Bell, PieChart, Scale, Download, ShoppingCart, Video, Lock,
  Dumbbell, TrendingUp, Trophy, BookOpen, Phone, ArrowLeft,
  Stethoscope, PawPrint, Banknote, BarChart2, AlertCircle, CheckCircle,
} from "lucide-react";

// ─── UTILITY ───────────────────────────────────────────────
const AppBar = ({ title, action }: { title: string; action?: React.ReactNode }) => (
  <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <ArrowLeft size={14} className="text-gray-400" />
      <span className="text-sm font-semibold text-gray-900">{title}</span>
    </div>
    {action}
  </div>
);

const Pill = ({ label, active }: { label: string; active?: boolean }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${active ? "bg-violet-600 text-white" : "bg-white text-gray-600 border border-gray-200"}`}>
    {label}
  </span>
);

const Avatar = ({ name, color = "bg-violet-100 text-violet-700" }: { name: string; color?: string }) => (
  <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-sm font-bold shrink-0`}>{name[0]}</div>
);

const RatingRow = ({ rating, count }: { rating: string; count?: string }) => (
  <div className="flex items-center gap-1">
    <span className="text-yellow-400 text-xs">★★★★★</span>
    <span className="text-xs text-gray-600 font-medium">{rating}</span>
    {count && <span className="text-xs text-gray-400">({count})</span>}
  </div>
);

const StatusBadge = ({ label, color }: { label: string; color: string }) => (
  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{label}</span>
);

const BottomBar = ({ items }: { items: { icon: React.ReactNode; label: string; active?: boolean }[] }) => (
  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex">
    {items.map((item) => (
      <button key={item.label} className={`flex-1 flex flex-col items-center py-2 gap-0.5 ${item.active ? "text-violet-600" : "text-gray-400"}`}>
        {item.icon}
        <span className="text-[9px]">{item.label}</span>
      </button>
    ))}
  </div>
);

// ─── STYLEGO ───────────────────────────────────────────────
export const StyleGoS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="StyleGo" />
    <div className="px-3 py-2 bg-white border-b border-gray-100">
      <div className="bg-gray-100 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={12} className="text-gray-400 shrink-0" />
        <span className="text-xs text-gray-400">Hair, nails, makeup...</span>
      </div>
    </div>
    <div className="flex gap-2 px-3 py-2 overflow-hidden">
      {["All", "Hair", "Nails", "Barber"].map((c, i) => <Pill key={c} label={c} active={i === 0} />)}
    </div>
    <div className="flex-1 px-3 space-y-2 overflow-hidden pb-14">
      {[
        { name: "Sofia M.", spec: "Hair & Color", rating: "4.9", dist: "0.8 km", price: "$35", color: "bg-violet-100 text-violet-700" },
        { name: "Carlos R.", spec: "Barbershop", rating: "4.8", dist: "1.2 km", price: "$25", color: "bg-blue-100 text-blue-700" },
        { name: "Ana L.", spec: "Nail Art", rating: "4.7", dist: "2.1 km", price: "$28", color: "bg-pink-100 text-pink-700" },
      ].map((s) => (
        <div key={s.name} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <Avatar name={s.name} color={s.color} />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900">{s.name}</div>
            <div className="text-xs text-gray-500">{s.spec}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-xs text-gray-500">{s.rating}</span>
              <span className="text-xs text-gray-300">·</span>
              <span className="text-xs text-gray-400">{s.dist}</span>
            </div>
          </div>
          <div className="text-xs font-bold text-violet-600 shrink-0">{s.price}</div>
        </div>
      ))}
    </div>
    <BottomBar items={[{ icon: <Search size={14} />, label: "Explore", active: true }, { icon: <Calendar size={14} />, label: "Bookings" }, { icon: <MessageSquare size={14} />, label: "Chat" }, { icon: <Users size={14} />, label: "Profile" }]} />
  </div>
);

export const StyleGoS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Stylist Profile" />
    <div className="flex flex-col items-center px-4 pt-4 pb-3 border-b border-gray-100">
      <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-2xl font-bold mb-2">S</div>
      <div className="text-sm font-bold text-gray-900">Sofia Martinez</div>
      <div className="text-xs text-gray-500 mb-1">Hair & Color Specialist</div>
      <RatingRow rating="4.9" count="142 reviews" />
      <div className="flex items-center gap-1 mt-1">
        <MapPin size={10} className="text-gray-400" />
        <span className="text-xs text-gray-400">0.8 km away · Available now</span>
      </div>
    </div>
    <div className="flex-1 px-4 py-3 space-y-2 overflow-hidden">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Services</div>
      {[
        { service: "Haircut", price: "$35", time: "45 min" },
        { service: "Color", price: "$75", time: "2 hrs" },
        { service: "Treatment", price: "$55", time: "1 hr" },
      ].map((s) => (
        <div key={s.service} className="flex items-center justify-between py-2 border-b border-gray-50">
          <div>
            <div className="text-xs font-medium text-gray-900">{s.service}</div>
            <div className="text-xs text-gray-400">{s.time}</div>
          </div>
          <div className="text-xs font-bold text-gray-900">{s.price}</div>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Book Now</button>
    </div>
  </div>
);

export const StyleGoS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white items-center px-4 pt-6 pb-4">
    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
      <CheckCircle size={28} className="text-green-500" />
    </div>
    <div className="text-sm font-bold text-gray-900 mb-1">Booking Confirmed!</div>
    <div className="text-xs text-gray-500 mb-5 text-center">You're all set. Sofia will come to you.</div>
    <div className="w-full bg-gray-50 rounded-2xl p-4 space-y-3 border border-gray-100">
      {[
        { label: "Stylist", value: "Sofia Martinez" },
        { label: "Service", value: "Haircut · $35" },
        { label: "Date", value: "Friday, Jun 6" },
        { label: "Time", value: "11:00 AM" },
        { label: "Location", value: "Your address" },
      ].map((item) => (
        <div key={item.label} className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{item.label}</span>
          <span className="text-xs font-medium text-gray-900">{item.value}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 w-full space-y-2">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">View in Maps</button>
      <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 text-xs font-medium">Message Sofia</button>
    </div>
  </div>
);

// ─── FIXIT ─────────────────────────────────────────────────
export const FixItS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="FixIt" />
    <div className="px-4 py-3">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What do you need fixed?</div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <Wrench size={18} />, label: "Plumbing", active: true },
          { icon: <Bell size={18} />, label: "Electrical" },
          { icon: <Package size={18} />, label: "Painting" },
          { icon: <RefreshCw size={18} />, label: "A/C" },
          { icon: <Lock size={18} />, label: "Locks" },
          { icon: <Truck size={18} />, label: "Moving" },
        ].map((item) => (
          <div key={item.label} className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border text-xs font-medium ${item.active ? "bg-violet-600 text-white border-violet-600" : "bg-white text-gray-700 border-gray-200"}`}>
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
    <div className="mx-4 mt-2 bg-orange-50 border border-orange-200 rounded-xl px-3 py-2 flex items-center gap-2">
      <AlertCircle size={14} className="text-orange-500 shrink-0" />
      <span className="text-xs text-orange-700 font-medium">Emergency service available 24/7</span>
    </div>
    <div className="px-4 mt-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Find a Technician Now</button>
    </div>
  </div>
);

export const FixItS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Technician" />
    <div className="flex items-start gap-3 px-4 pt-4 pb-3 border-b border-gray-100">
      <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold shrink-0">M</div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="text-sm font-bold text-gray-900">Miguel Torres</div>
          <StatusBadge label="Available" color="bg-green-100 text-green-700" />
        </div>
        <div className="text-xs text-gray-500 mb-1">Licensed Plumber</div>
        <RatingRow rating="4.9" count="127 jobs" />
        <div className="text-xs text-violet-600 font-semibold mt-1">$45 / hour</div>
      </div>
    </div>
    <div className="px-4 py-3 space-y-2 flex-1 overflow-hidden">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Certifications</div>
      {["Licensed Plumber · Cert. #4829", "Background check verified", "200+ completed jobs"].map((c) => (
        <div key={c} className="flex items-center gap-2">
          <Check size={12} className="text-green-500 shrink-0" />
          <span className="text-xs text-gray-700">{c}</span>
        </div>
      ))}
      <div className="mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</div>
      <div className="bg-gray-100 rounded-xl h-16 flex items-center justify-center">
        <div className="flex items-center gap-1 text-xs text-gray-400"><MapPin size={12} />1.4 km away</div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Request Service · $45/hr</button>
    </div>
  </div>
);

export const FixItS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Job Tracking" />
    <div className="flex-1 flex flex-col px-4 pt-4">
      <div className="bg-gray-100 rounded-2xl h-32 flex items-center justify-center mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-blue-50" />
        <div className="relative flex flex-col items-center">
          <Navigation size={24} className="text-violet-600 mb-1" />
          <span className="text-xs text-gray-600 font-medium">Miguel is on the way</span>
          <span className="text-lg font-bold text-gray-900">ETA 12 min</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        {["Confirmed", "En Route", "Arrived", "Done"].map((step, i) => (
          <React.Fragment key={step}>
            <div className={`flex flex-col items-center gap-1 ${i <= 1 ? "text-violet-600" : "text-gray-300"}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i <= 1 ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-400"}`}>{i + 1}</div>
              <span className="text-[9px] font-medium">{step}</span>
            </div>
            {i < 3 && <div className={`flex-1 h-0.5 mx-1 ${i < 1 ? "bg-violet-600" : "bg-gray-200"}`} />}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">M</div>
        <div className="flex-1">
          <div className="text-xs font-semibold text-gray-900">Miguel Torres</div>
          <div className="text-xs text-gray-400">Plumbing · $45/hr</div>
        </div>
        <button className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center"><Phone size={14} className="text-violet-600" /></button>
      </div>
    </div>
  </div>
);

// ─── PETCARE ───────────────────────────────────────────────
export const PetCareS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="PetCare" />
    <div className="px-4 pt-4 pb-2">
      <div className="flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm mb-4">
        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-lg">🐕</div>
        <div>
          <div className="text-xs font-bold text-gray-900">Hi, Luna!</div>
          <div className="text-xs text-gray-400">Golden Retriever · 3 yrs</div>
        </div>
        <ChevronRight size={14} className="text-gray-300 ml-auto" />
      </div>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What does Luna need?</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: <Stethoscope size={20} />, label: "Vet Visit", price: "From $40", active: true },
          { icon: <Users size={20} />, label: "Grooming", price: "From $30" },
          { icon: <Check size={20} />, label: "Vaccines", price: "From $25" },
          { icon: <AlertCircle size={20} />, label: "Emergency", price: "24/7", color: "text-red-500" },
        ].map((item) => (
          <div key={item.label} className={`flex flex-col items-center gap-1 py-4 rounded-xl border text-center ${item.active ? "bg-violet-600 text-white border-violet-600" : "bg-white border-gray-200"}`}>
            <span className={item.active ? "text-white" : (item.color || "text-violet-600")}>{item.icon}</span>
            <span className={`text-xs font-semibold ${item.active ? "text-white" : "text-gray-800"}`}>{item.label}</span>
            <span className={`text-[10px] ${item.active ? "text-violet-200" : "text-gray-400"}`}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PetCareS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Book Appointment" />
    <div className="flex items-center gap-3 px-4 pt-4 pb-3 border-b border-gray-100">
      <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-lg font-bold">G</div>
      <div>
        <div className="text-sm font-bold text-gray-900">Dr. García</div>
        <div className="text-xs text-gray-500">General Veterinarian</div>
        <RatingRow rating="4.9" count="98 visits" />
      </div>
    </div>
    <div className="px-4 py-3 flex-1 overflow-hidden">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Today's available slots</div>
      <div className="flex gap-2 flex-wrap mb-4">
        {["10:00 AM", "2:00 PM", "4:30 PM"].map((t, i) => (
          <span key={t} className={`px-3 py-2 rounded-xl text-xs font-medium border ${i === 1 ? "bg-violet-600 text-white border-violet-600" : "bg-white text-gray-700 border-gray-200"}`}>{t}</span>
        ))}
      </div>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Pet</div>
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4">
        <span className="text-base">🐕</span>
        <span className="text-xs font-medium text-gray-900">Luna · Golden Retriever</span>
        <Check size={12} className="text-violet-600 ml-auto" />
      </div>
      <div className="flex items-center justify-between text-xs text-gray-600 bg-gray-50 rounded-xl px-3 py-2">
        <span>Vet Visit at home</span>
        <span className="font-bold text-gray-900">$40</span>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Confirm Appointment · $40</button>
    </div>
  </div>
);

export const PetCareS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Tracking" />
    <div className="flex-1 flex flex-col items-center px-4 pt-5">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-2">
        <PawPrint size={26} className="text-green-500" />
      </div>
      <div className="text-sm font-bold text-gray-900 mb-1">Dr. García is on the way!</div>
      <div className="text-xs text-gray-400 mb-4">Estimated arrival: 18 minutes</div>
      <div className="w-full bg-gray-100 rounded-2xl h-24 flex items-center justify-center mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50" />
        <div className="relative flex items-center gap-2 text-xs text-gray-500"><Navigation size={16} className="text-violet-600" />Live tracking active</div>
      </div>
      <div className="w-full space-y-2">
        {[
          { step: "Booking confirmed", done: true },
          { step: "Vet heading to your location", done: true },
          { step: "Vet arrived", done: false },
          { step: "Appointment completed", done: false },
        ].map((s) => (
          <div key={s.step} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${s.done ? "bg-green-500" : "bg-gray-200"}`}>
              {s.done ? <Check size={10} className="text-white" /> : <div className="w-2 h-2 rounded-full bg-gray-400" />}
            </div>
            <span className={`text-xs ${s.done ? "text-gray-900 font-medium" : "text-gray-400"}`}>{s.step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── MOVEIT ────────────────────────────────────────────────
export const MoveItS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="MoveIt" />
    <div className="px-4 pt-4 pb-2 flex-1 overflow-hidden">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">How big is your move?</div>
      <div className="space-y-2 mb-4">
        {[
          { label: "Studio / Bedroom", size: "~10 items", price: "$120–$160" },
          { label: "1 Bedroom", size: "~25 items", price: "$160–$200", active: true },
          { label: "2 Bedrooms", size: "~40 items", price: "$220–$280" },
          { label: "3+ Bedrooms", size: "50+ items", price: "$320+" },
        ].map((o) => (
          <div key={o.label} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${o.active ? "border-violet-600 bg-violet-50" : "border-gray-200 bg-white"}`}>
            <div>
              <div className={`text-xs font-semibold ${o.active ? "text-violet-700" : "text-gray-900"}`}>{o.label}</div>
              <div className="text-xs text-gray-400">{o.size}</div>
            </div>
            <div className={`text-xs font-bold ${o.active ? "text-violet-600" : "text-gray-600"}`}>{o.price}</div>
          </div>
        ))}
      </div>
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 text-center">
        <div className="text-xs text-gray-500">Estimated price</div>
        <div className="text-xl font-bold text-violet-600">$160 – $200</div>
        <div className="text-xs text-gray-400">Including 2 movers + truck</div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Find Available Movers</button>
    </div>
  </div>
);

export const MoveItS2: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Choose Your Mover" />
    <div className="px-4 pt-3 space-y-3 flex-1 overflow-hidden">
      {[
        { name: "Carlos & Team", truck: "3-ton truck", rating: "4.9", jobs: "312 moves", price: "$175", eta: "Available now", color: "bg-violet-100 text-violet-700" },
        { name: "ProMovers", truck: "5-ton truck", rating: "4.8", jobs: "198 moves", price: "$195", eta: "In 1 hr", color: "bg-blue-100 text-blue-700" },
      ].map((m) => (
        <div key={m.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <Avatar name={m.name} color={m.color} />
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-900">{m.name}</div>
                <div className="text-xs text-gray-400 flex items-center gap-1"><Truck size={10} />{m.truck}</div>
                <RatingRow rating={m.rating} count={m.jobs} />
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-900">{m.price}</div>
                <StatusBadge label={m.eta} color="bg-green-100 text-green-700" />
              </div>
            </div>
          </div>
          <button className="w-full bg-violet-600 text-white py-2.5 text-xs font-semibold">Select · {m.price}</button>
        </div>
      ))}
    </div>
  </div>
);

export const MoveItS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Move Tracking" />
    <div className="flex-1 px-4 pt-4">
      <div className="text-center mb-3">
        <div className="text-xs text-gray-400">Carlos & Team</div>
        <div className="text-sm font-bold text-gray-900">Your move is in progress</div>
      </div>
      <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl h-28 flex items-center justify-center mb-4">
        <div className="text-center">
          <Truck size={28} className="text-violet-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-gray-900">25 min</div>
          <div className="text-xs text-gray-400">until delivery</div>
        </div>
      </div>
      <div className="space-y-3">
        {[
          { label: "Loading items", done: true, time: "10:30 AM" },
          { label: "In transit", done: true, time: "11:15 AM" },
          { label: "Unloading at destination", done: false, time: "~11:45 AM" },
          { label: "Move completed", done: false, time: "~12:00 PM" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${s.done ? "bg-violet-600" : "bg-gray-200"}`}>
              {s.done ? <Check size={10} className="text-white" /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}
            </div>
            <div className="flex-1">
              <span className={`text-xs ${s.done ? "text-gray-900 font-medium" : "text-gray-400"}`}>{s.label}</span>
            </div>
            <span className="text-xs text-gray-400">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── TABLEORDER ────────────────────────────────────────────
export const TableOrderS1: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-white px-4 py-3 border-b border-gray-100">
      <div className="text-sm font-bold text-gray-900">La Trattoria</div>
      <div className="text-xs text-gray-400 flex items-center gap-1"><span className="text-amber-400">★</span> 4.8 · Italian · $$</div>
    </div>
    <div className="flex gap-2 px-4 py-2 border-b border-gray-100 overflow-hidden">
      {["Starters", "Pasta", "Pizza", "Desserts", "Drinks"].map((c, i) => (
        <button key={c} className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${i === 1 ? "bg-orange-500 text-white" : "text-gray-500"}`}>{c}</button>
      ))}
    </div>
    <div className="flex-1 px-4 py-2 space-y-3 overflow-hidden">
      {[
        { name: "Spaghetti Bolognese", desc: "Classic beef ragù, parmesan", price: "$14" },
        { name: "Tagliatelle al Pesto", desc: "Basil pesto, pine nuts", price: "$13" },
        { name: "Carbonara", desc: "Guanciale, egg, pecorino", price: "$15" },
      ].map((item) => (
        <div key={item.name} className="flex items-center gap-3 border-b border-gray-50 pb-3">
          <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-2xl shrink-0">🍝</div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900">{item.name}</div>
            <div className="text-xs text-gray-400">{item.desc}</div>
            <div className="text-xs font-bold text-gray-900 mt-0.5">{item.price}</div>
          </div>
          <button className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0"><Plus size={14} /></button>
        </div>
      ))}
    </div>
    <div className="px-4 pb-3">
      <button className="w-full py-2.5 rounded-xl bg-orange-500 text-white text-xs font-semibold flex items-center justify-center gap-2">
        <ShoppingBag size={14} />View order · $27
      </button>
    </div>
  </div>
);

export const TableOrderS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Your Order" />
    <div className="flex gap-2 mx-4 mt-3 p-1 bg-gray-100 rounded-xl mb-3">
      <button className="flex-1 py-2 rounded-lg bg-white text-xs font-semibold shadow-sm text-gray-900">Dine In</button>
      <button className="flex-1 py-2 rounded-lg text-xs font-medium text-gray-500">Takeout</button>
      <button className="flex-1 py-2 rounded-lg text-xs font-medium text-gray-500">Delivery</button>
    </div>
    <div className="flex-1 px-4 space-y-2 overflow-hidden">
      {[
        { name: "Spaghetti Bolognese", qty: 1, price: "$14.00" },
        { name: "Carbonara", qty: 2, price: "$30.00" },
        { name: "Sparkling Water", qty: 1, price: "$3.50" },
      ].map((item) => (
        <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">{item.qty}</div>
            <span className="text-xs text-gray-800">{item.name}</span>
          </div>
          <span className="text-xs font-semibold text-gray-900">{item.price}</span>
        </div>
      ))}
      <div className="pt-2 space-y-1">
        <div className="flex justify-between text-xs text-gray-400"><span>Subtotal</span><span>$47.50</span></div>
        <div className="flex justify-between text-xs text-gray-400"><span>Tax (8%)</span><span>$3.80</span></div>
        <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-100"><span>Total</span><span>$51.30</span></div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-orange-500 text-white text-xs font-semibold">Place Order · $51.30</button>
    </div>
  </div>
);

export const TableOrderS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-100">
    <div className="bg-orange-500 px-4 py-3">
      <div className="text-white text-sm font-bold">Kitchen Display</div>
      <div className="text-orange-100 text-xs">La Trattoria · Live orders</div>
    </div>
    <div className="flex-1 px-3 pt-3 space-y-2 overflow-hidden">
      {[
        { table: "Table 4", items: ["Spaghetti Bolognese", "Carbonara ×2"], status: "Preparing", color: "bg-orange-100 text-orange-700" },
        { table: "Table 7", items: ["Tagliatelle al Pesto"], status: "Ready", color: "bg-green-100 text-green-700" },
        { table: "Takeout #12", items: ["Carbonara", "Sparkling Water"], status: "New", color: "bg-blue-100 text-blue-700" },
      ].map((order) => (
        <div key={order.table} className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-900">{order.table}</span>
            <StatusBadge label={order.status} color={order.color} />
          </div>
          {order.items.map((i) => <div key={i} className="text-xs text-gray-600 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-400 inline-block" />{i}</div>)}
        </div>
      ))}
    </div>
  </div>
);

// ─── FRESHBOX ──────────────────────────────────────────────
export const FreshBoxS1: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="This Week's Box" action={<span className="text-xs text-violet-600 font-medium">Edit</span>} />
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="text-xs text-gray-500 mb-3">Standard Plan · Delivery Thursday</div>
      <div className="space-y-2 mb-4">
        {[
          { item: "Organic Tomatoes", weight: "500g", fresh: true },
          { item: "Avocados", weight: "×2", fresh: true },
          { item: "Butter Lettuce", weight: "1 head", fresh: true },
          { item: "Baby Carrots", weight: "300g", fresh: true },
          { item: "Broccoli", weight: "400g", fresh: true },
        ].map((p) => (
          <div key={p.item} className="flex items-center gap-3 py-2 border-b border-gray-50">
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-sm">🥦</div>
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-900">{p.item}</div>
              <div className="text-xs text-gray-400">{p.weight}</div>
            </div>
            {p.fresh && <StatusBadge label="Fresh" color="bg-green-100 text-green-600" />}
          </div>
        ))}
      </div>
      <button className="flex items-center gap-2 text-xs text-violet-600 font-medium"><Plus size={12} />Add or swap items</button>
    </div>
  </div>
);

export const FreshBoxS2: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Choose a Plan" />
    <div className="px-4 pt-4 space-y-3 flex-1 overflow-hidden">
      {[
        { name: "Basic", items: "8–10 items", price: "$29/wk", desc: "Perfect for 1–2 people" },
        { name: "Standard", items: "12–14 items", price: "$49/wk", desc: "Ideal for families", active: true },
        { name: "Premium", items: "18–20 items", price: "$79/wk", desc: "Fully stocked kitchen" },
      ].map((plan) => (
        <div key={plan.name} className={`rounded-2xl p-4 border ${plan.active ? "border-green-500 bg-green-50" : "border-gray-200 bg-white"}`}>
          <div className="flex items-start justify-between">
            <div>
              <div className={`text-sm font-bold ${plan.active ? "text-green-700" : "text-gray-900"}`}>{plan.name}</div>
              <div className="text-xs text-gray-500">{plan.desc}</div>
              <div className="text-xs text-gray-400 mt-0.5">{plan.items}</div>
            </div>
            <div className="text-right">
              <div className={`text-sm font-bold ${plan.active ? "text-green-700" : "text-gray-900"}`}>{plan.price}</div>
              {plan.active && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Selected</span>}
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-3">
        <Leaf size={14} className="text-green-500" />
        <span className="text-xs text-gray-600">From 12+ local farms in your region</span>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-green-500 text-white text-xs font-semibold">Start Subscription · $49/wk</button>
    </div>
  </div>
);

export const FreshBoxS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Delivery Tracking" />
    <div className="flex-1 px-4 pt-4">
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-4 text-center">
        <div className="text-xs text-gray-500">Next delivery</div>
        <div className="text-lg font-bold text-gray-900">Thursday, Jun 6</div>
        <div className="text-xs text-green-600 font-medium">Between 8:00 AM – 12:00 PM</div>
      </div>
      <div className="space-y-3">
        {[
          { label: "Order placed", detail: "Sun, Jun 2 · 9:00 AM", done: true },
          { label: "Box packed at farm", detail: "Wed, Jun 5", done: true },
          { label: "Out for delivery", detail: "Thu, Jun 6 · 8:00 AM", done: false },
          { label: "Delivered!", detail: "Expected by 12:00 PM", done: false },
        ].map((s) => (
          <div key={s.label} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${s.done ? "bg-green-500" : "bg-gray-200"}`}>
              {s.done ? <Check size={10} className="text-white" /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}
            </div>
            <div>
              <div className={`text-xs font-medium ${s.done ? "text-gray-900" : "text-gray-400"}`}>{s.label}</div>
              <div className="text-xs text-gray-400">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── PAYTRACK ──────────────────────────────────────────────
export const PayTrackS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="PayTrack" action={<Plus size={16} className="text-violet-600" />} />
    <div className="flex gap-2 px-4 py-2 border-b border-gray-100 bg-white">
      {["All", "Pending", "Paid", "Overdue"].map((t, i) => (
        <button key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${i === 0 ? "bg-violet-100 text-violet-700" : "text-gray-500"}`}>{t}</button>
      ))}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        { client: "Acme Corp", desc: "Website redesign", amount: "$3,200", status: "Paid", color: "bg-green-100 text-green-700", date: "Jun 1" },
        { client: "StartupXYZ", desc: "Mobile app · Phase 2", amount: "$4,800", status: "Pending", color: "bg-yellow-100 text-yellow-700", date: "Jun 8" },
        { client: "RetailCo", desc: "SEO consulting", amount: "$750", status: "Overdue", color: "bg-red-100 text-red-700", date: "May 25" },
      ].map((inv) => (
        <div key={inv.client} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-bold text-gray-900">{inv.client}</div>
              <div className="text-xs text-gray-400">{inv.desc}</div>
              <div className="text-xs text-gray-400 mt-0.5">Due {inv.date}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">{inv.amount}</div>
              <StatusBadge label={inv.status} color={inv.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PayTrackS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="New Invoice" />
    <div className="flex-1 px-4 pt-4 space-y-3 overflow-hidden">
      {[
        { label: "Client", value: "StartupXYZ", type: "select" },
        { label: "Project", value: "Mobile App · Phase 3", type: "text" },
        { label: "Amount", value: "$5,400.00", type: "text" },
        { label: "Due Date", value: "Jun 30, 2025", type: "text" },
      ].map((field) => (
        <div key={field.label}>
          <div className="text-xs text-gray-400 mb-1">{field.label}</div>
          <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 flex items-center justify-between bg-gray-50">
            {field.value}
            {field.type === "select" && <ChevronRight size={12} className="text-gray-400" />}
          </div>
        </div>
      ))}
      <div>
        <div className="text-xs text-gray-400 mb-1">Line items</div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {[{ desc: "UI Design", qty: "40h", price: "$2,800" }, { desc: "Development", qty: "24h", price: "$2,600" }].map((li) => (
            <div key={li.desc} className="flex items-center justify-between px-3 py-2 border-b border-gray-100 last:border-0">
              <span className="text-xs text-gray-700">{li.desc}</span>
              <span className="text-xs text-gray-400">{li.qty}</span>
              <span className="text-xs font-medium text-gray-900">{li.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Preview & Send Invoice</button>
    </div>
  </div>
);

export const PayTrackS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Dashboard" />
    <div className="px-4 pt-4 flex-1 overflow-hidden">
      <div className="bg-violet-600 rounded-2xl p-4 mb-4 text-white">
        <div className="text-xs text-violet-200 mb-1">Revenue this month</div>
        <div className="text-2xl font-bold">$8,420</div>
        <div className="text-xs text-green-300 flex items-center gap-1 mt-0.5"><TrendingUp size={10} />+12% vs last month</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-white rounded-xl p-3 border border-gray-100">
          <div className="text-xs text-gray-400">Unpaid</div>
          <div className="text-sm font-bold text-yellow-600">$2,100</div>
          <div className="text-xs text-gray-400">2 invoices</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-100">
          <div className="text-xs text-gray-400">Collected</div>
          <div className="text-sm font-bold text-green-600">$6,320</div>
          <div className="text-xs text-gray-400">5 invoices</div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-gray-100">
        <div className="text-xs font-semibold text-gray-700 mb-2">Top clients</div>
        {[{ name: "Acme Corp", amount: "$3,200" }, { name: "StartupXYZ", amount: "$2,800" }].map((c) => (
          <div key={c.name} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
            <span className="text-xs text-gray-700">{c.name}</span>
            <span className="text-xs font-bold text-gray-900">{c.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── SPLITEASY ─────────────────────────────────────────────
export const SplitEasyS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Mexico Trip 🏖️" />
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-gray-500">4 people · 8 expenses</div>
        <div className="text-xs font-bold text-gray-900">Total: $1,240</div>
      </div>
      <div className="flex -space-x-2 mb-4">
        {["You", "Carlos", "María", "Ana"].map((n, i) => (
          <div key={n} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white ${["bg-violet-500","bg-blue-500","bg-pink-500","bg-green-500"][i]}`}>{n[0]}</div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { desc: "Hotel deposit", paid: "You", amount: "$420", split: "4 people" },
          { desc: "Dinner at El Patron", paid: "Carlos", amount: "$180", split: "4 people" },
          { desc: "Taxi to airport", paid: "María", amount: "$64", split: "4 people" },
          { desc: "Snorkeling tour", paid: "You", amount: "$240", split: "4 people" },
        ].map((exp) => (
          <div key={exp.desc} className="bg-white rounded-xl px-3 py-2.5 flex items-center justify-between border border-gray-100 shadow-sm">
            <div>
              <div className="text-xs font-medium text-gray-900">{exp.desc}</div>
              <div className="text-xs text-gray-400">Paid by {exp.paid} · {exp.split}</div>
            </div>
            <span className="text-xs font-bold text-gray-900">{exp.amount}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold flex items-center justify-center gap-2"><Plus size={14} />Add Expense</button>
    </div>
  </div>
);

export const SplitEasyS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Add Expense" />
    <div className="flex-1 px-4 pt-4 space-y-4 overflow-hidden">
      <div>
        <div className="text-xs text-gray-400 mb-1">Description</div>
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 bg-gray-50">Cenote entrance + lunch</div>
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-1">Amount</div>
        <div className="border border-violet-400 rounded-xl px-3 py-2.5 text-lg font-bold text-gray-900">$85.00</div>
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-1">Paid by</div>
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 bg-violet-50 flex justify-between items-center">You <ChevronRight size={12} className="text-gray-300" /></div>
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-2">Split method</div>
        <div className="grid grid-cols-3 gap-2">
          {["Equally", "By %", "Custom"].map((m, i) => (
            <button key={m} className={`py-2 rounded-xl text-xs font-medium border ${i === 0 ? "bg-violet-600 text-white border-violet-600" : "border-gray-200 text-gray-600"}`}>{m}</button>
          ))}
        </div>
      </div>
      <div className="text-xs text-gray-400">Each person pays <strong className="text-gray-900">$21.25</strong></div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Save Expense</button>
    </div>
  </div>
);

export const SplitEasyS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Balances" />
    <div className="px-4 pt-4 flex-1 overflow-hidden">
      <div className="bg-violet-600 rounded-2xl p-4 mb-4 text-white text-center">
        <div className="text-xs text-violet-200">You are owed</div>
        <div className="text-2xl font-bold">$124.50</div>
      </div>
      <div className="space-y-2 mb-4">
        {[
          { name: "Carlos R.", owes: "owes you", amount: "$67.00", color: "bg-blue-100 text-blue-700" },
          { name: "María G.", owes: "owes you", amount: "$57.50", color: "bg-pink-100 text-pink-700" },
          { name: "Ana L.", owes: "is settled", amount: "$0.00", color: "bg-green-100 text-green-700" },
        ].map((b) => (
          <div key={b.name} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-3 border border-gray-100 shadow-sm">
            <Avatar name={b.name} color={b.color} />
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-900">{b.name}</div>
              <div className="text-xs text-gray-400">{b.owes}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-gray-900">{b.amount}</div>
              {b.amount !== "$0.00" && <button className="text-xs text-violet-600 font-medium">Remind</button>}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold flex items-center justify-center gap-2"><Scale size={14} />Settle up</button>
    </div>
  </div>
);

// ─── STOREDESK ─────────────────────────────────────────────
export const StoreDeskS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <div className="bg-white px-4 py-3 border-b border-gray-100">
      <div className="text-sm font-bold text-gray-900">New Sale</div>
      <div className="text-xs text-gray-400">Tap a product to add</div>
    </div>
    <div className="px-3 py-2 bg-white border-b border-gray-100">
      <div className="bg-gray-100 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={12} className="text-gray-400" /><span className="text-xs text-gray-400">Search or scan barcode...</span>
      </div>
    </div>
    <div className="flex-1 px-3 pt-2 overflow-hidden">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { name: "Café", price: "$3.50", emoji: "☕" },
          { name: "Croissant", price: "$2.80", emoji: "🥐" },
          { name: "Sandwich", price: "$5.20", emoji: "🥪" },
          { name: "Juice", price: "$4.00", emoji: "🍊" },
          { name: "Water", price: "$1.50", emoji: "💧" },
          { name: "Cookie", price: "$1.80", emoji: "🍪" },
        ].map((p) => (
          <div key={p.name} className="bg-white rounded-xl p-2 flex flex-col items-center border border-gray-100 shadow-sm">
            <div className="text-xl mb-1">{p.emoji}</div>
            <div className="text-xs font-medium text-gray-900">{p.name}</div>
            <div className="text-xs text-violet-600 font-bold">{p.price}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-900">Cart (3 items)</span>
          <span className="text-xs text-red-400 font-medium">Clear</span>
        </div>
        <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-100">
          <span>Total</span><span>$11.50</span>
        </div>
      </div>
    </div>
    <div className="px-3 pb-3">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Charge $11.50</button>
    </div>
  </div>
);

export const StoreDeskS2: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Inventory" action={<Plus size={14} className="text-violet-600" />} />
    <div className="px-3 py-2 bg-white border-b border-gray-100">
      <div className="bg-gray-100 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={12} className="text-gray-400" /><span className="text-xs text-gray-400">Search products...</span>
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        { name: "Café Americano", sku: "CAF-001", stock: 142, price: "$3.50", status: "OK" },
        { name: "Croissant", sku: "PAN-003", stock: 8, price: "$2.80", status: "LOW" },
        { name: "Sandwich Club", sku: "SAN-007", stock: 23, price: "$5.20", status: "OK" },
        { name: "Orange Juice", sku: "JUI-002", stock: 3, price: "$4.00", status: "CRITICAL" },
      ].map((p) => (
        <div key={p.name} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-3 border border-gray-100 shadow-sm">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900">{p.name}</div>
            <div className="text-xs text-gray-400">{p.sku} · {p.price}</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-gray-900">{p.stock} units</div>
            <StatusBadge label={p.status} color={p.status === "OK" ? "bg-green-100 text-green-700" : p.status === "LOW" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const StoreDeskS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Sales Report" />
    <div className="px-4 pt-4 flex-1 overflow-hidden">
      <div className="bg-violet-600 rounded-2xl p-4 mb-4 text-white">
        <div className="text-xs text-violet-200">Today's revenue</div>
        <div className="text-2xl font-bold">$3,450</div>
        <div className="text-xs text-green-300 flex items-center gap-1 mt-0.5"><TrendingUp size={10} />+8% vs yesterday</div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-3 mb-3 shadow-sm">
        <div className="text-xs font-semibold text-gray-700 mb-3">Hourly sales</div>
        <div className="flex items-end justify-between gap-1 h-16">
          {[30, 45, 60, 80, 95, 70, 55, 85, 100, 65].map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === 8 ? "bg-violet-600" : "bg-violet-200"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-gray-400 mt-1"><span>8am</span><span>12pm</span><span>5pm</span></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
        <div className="text-xs font-semibold text-gray-700 mb-2">Top products</div>
        {[{ name: "Café", sales: 128, revenue: "$448" }, { name: "Sandwich", sales: 64, revenue: "$333" }, { name: "Croissant", sales: 89, revenue: "$249" }].map((p, i) => (
          <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
            <span className="text-xs text-gray-400 font-bold w-4">#{i + 1}</span>
            <span className="flex-1 text-xs text-gray-700">{p.name}</span>
            <span className="text-xs text-gray-400">{p.sales} sold</span>
            <span className="text-xs font-bold text-gray-900">{p.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── MINDSPACE ─────────────────────────────────────────────
export const MindSpaceS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="MindSpace" />
    <div className="px-4 py-3 bg-white border-b border-gray-100">
      <div className="text-xs text-gray-500 mb-2">How are you feeling today?</div>
      <div className="flex gap-2 flex-wrap">
        {["😔 Anxious", "😞 Sad", "😤 Stressed", "😶 Numb"].map((m, i) => (
          <span key={m} className={`px-3 py-1 rounded-full text-xs font-medium border ${i === 0 ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-white border-gray-200 text-gray-600"}`}>{m}</span>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Available therapists</div>
      {[
        { name: "Dr. Ana Ruiz", spec: "Anxiety & Depression", avail: "Today 4:00 PM", price: "$80/session", color: "bg-blue-100 text-blue-700" },
        { name: "Dr. Pedro Salas", spec: "Trauma & PTSD", avail: "Today 6:00 PM", price: "$90/session", color: "bg-teal-100 text-teal-700" },
        { name: "Dr. Laura Vega", spec: "Relationships", avail: "Tomorrow 10am", price: "$75/session", color: "bg-purple-100 text-purple-700" },
      ].map((t) => (
        <div key={t.name} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <Avatar name={t.name.split(" ")[1]} color={t.color} />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-400">{t.spec}</div>
            <div className="text-xs text-green-600 font-medium mt-0.5">{t.avail}</div>
          </div>
          <div className="text-xs font-bold text-gray-700 shrink-0">{t.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export const MindSpaceS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Therapist Profile" />
    <div className="flex flex-col items-center px-4 pt-4 pb-3 border-b border-gray-100">
      <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold mb-2">A</div>
      <div className="text-sm font-bold text-gray-900">Dr. Ana Ruiz</div>
      <div className="text-xs text-gray-500 mb-1">Anxiety & Depression Specialist</div>
      <RatingRow rating="4.9" count="214 sessions" />
      <div className="flex gap-3 mt-2">
        <div className="text-center"><div className="text-sm font-bold text-gray-900">8</div><div className="text-xs text-gray-400">Years exp.</div></div>
        <div className="w-px bg-gray-200" />
        <div className="text-center"><div className="text-sm font-bold text-gray-900">214</div><div className="text-xs text-gray-400">Sessions</div></div>
        <div className="w-px bg-gray-200" />
        <div className="text-center"><div className="text-sm font-bold text-gray-900">$80</div><div className="text-xs text-gray-400">/ session</div></div>
      </div>
    </div>
    <div className="flex-1 px-4 py-3 overflow-hidden">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Specialties</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Anxiety", "Depression", "Burnout", "Self-esteem"].map((s) => <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{s}</span>)}
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl px-3 py-2 flex items-center justify-between">
        <span className="text-xs text-green-800 font-medium">Next available: Today 4:00 PM</span>
        <ChevronRight size={12} className="text-green-500" />
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold">Book Session · $80</button>
    </div>
  </div>
);

export const MindSpaceS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Session Confirmed" />
    <div className="flex-1 flex flex-col items-center px-4 pt-6 pb-4">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
        <CheckCircle size={28} className="text-blue-500" />
      </div>
      <div className="text-sm font-bold text-gray-900 mb-1">You're all set!</div>
      <div className="text-xs text-gray-500 mb-5 text-center">Your session with Dr. Ana Ruiz is confirmed.</div>
      <div className="w-full bg-gray-50 rounded-2xl p-4 space-y-3 border border-gray-100 mb-4">
        {[
          { label: "Therapist", value: "Dr. Ana Ruiz" },
          { label: "Date", value: "Thursday, Jun 6" },
          { label: "Time", value: "4:00 PM – 5:00 PM" },
          { label: "Format", value: "Video call" },
          { label: "Cost", value: "$80" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-xs text-gray-400">{item.label}</span>
            <span className="text-xs font-medium text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
        <div className="text-xs font-semibold text-blue-800 mb-1">Preparation tips</div>
        <div className="text-xs text-blue-700">Find a quiet, private space. Have water nearby. It's ok to feel nervous — you got this 💙</div>
      </div>
      <button className="w-full py-3 rounded-xl bg-gray-200 text-gray-500 text-xs font-semibold" disabled>Join Session (available 5 min before)</button>
    </div>
  </div>
);

// ─── FITCOACH ──────────────────────────────────────────────
export const FitCoachS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="FitCoach" />
    <div className="flex gap-2 px-4 py-2 border-b border-gray-100 bg-white overflow-hidden">
      {["All", "Strength", "HIIT", "Yoga", "Running"].map((c, i) => <Pill key={c} label={c} active={i === 0} />)}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-3 overflow-hidden">
      {[
        { name: "Marco Silva", spec: "Strength & Hypertrophy", sessions: "340 sessions", price: "$45/hr", rating: "4.9", color: "bg-orange-100 text-orange-700" },
        { name: "Elena Torres", spec: "HIIT & Cardio", sessions: "218 sessions", price: "$38/hr", rating: "4.8", color: "bg-pink-100 text-pink-700" },
        { name: "Andrés Paz", spec: "Yoga & Mobility", sessions: "187 sessions", price: "$35/hr", rating: "4.7", color: "bg-teal-100 text-teal-700" },
      ].map((c) => (
        <div key={c.name} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <Avatar name={c.name} color={c.color} />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900">{c.name}</div>
            <div className="text-xs text-gray-400">{c.spec}</div>
            <div className="flex items-center gap-1"><span className="text-xs text-yellow-400">★</span><span className="text-xs text-gray-500">{c.rating}</span><span className="text-xs text-gray-300">·</span><span className="text-xs text-gray-400">{c.sessions}</span></div>
          </div>
          <div className="text-xs font-bold text-violet-600 shrink-0">{c.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export const FitCoachS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Today's Workout" />
    <div className="px-4 pt-3 pb-2 border-b border-gray-100">
      <div className="text-sm font-bold text-gray-900">Week 2 · Build Phase</div>
      <div className="text-xs text-gray-400">Monday — Upper Body</div>
    </div>
    <div className="flex gap-1 px-4 py-2 overflow-hidden border-b border-gray-50">
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
        <div key={d} className={`flex-1 flex flex-col items-center py-1.5 rounded-lg ${i === 0 ? "bg-violet-600 text-white" : "text-gray-500"}`}>
          <div className="text-[10px] font-medium">{d}</div>
          {i === 0 && <div className="w-1 h-1 rounded-full bg-white mt-0.5" />}
        </div>
      ))}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        { exercise: "Barbell Squat", sets: "3 sets × 12 reps", weight: "60 kg" },
        { exercise: "Romanian Deadlift", sets: "3 sets × 8 reps", weight: "70 kg" },
        { exercise: "Plank Hold", sets: "3 sets × 45 sec", weight: "Bodyweight" },
        { exercise: "Push-ups", sets: "3 sets × 15 reps", weight: "Bodyweight" },
      ].map((ex, i) => (
        <div key={ex.exercise} className="flex items-center gap-3 py-2 border-b border-gray-50">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < 2 ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-500"}`}>{i + 1}</div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-gray-900">{ex.exercise}</div>
            <div className="text-xs text-gray-400">{ex.sets}</div>
          </div>
          <span className="text-xs font-medium text-gray-600 shrink-0">{ex.weight}</span>
        </div>
      ))}
    </div>
  </div>
);

export const FitCoachS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="Progress" />
    <div className="px-4 pt-4 flex-1 overflow-hidden">
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white rounded-xl p-2 text-center border border-gray-100 shadow-sm">
          <div className="text-sm font-bold text-violet-600">18</div>
          <div className="text-[10px] text-gray-400">Workouts</div>
        </div>
        <div className="bg-white rounded-xl p-2 text-center border border-gray-100 shadow-sm">
          <div className="text-sm font-bold text-orange-500">12</div>
          <div className="text-[10px] text-gray-400">Day streak</div>
        </div>
        <div className="bg-white rounded-xl p-2 text-center border border-gray-100 shadow-sm">
          <div className="text-sm font-bold text-green-600">-2.4kg</div>
          <div className="text-[10px] text-gray-400">This month</div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-3 mb-3 shadow-sm">
        <div className="text-xs font-semibold text-gray-700 mb-2">Weight this month</div>
        <div className="flex items-end justify-between gap-1 h-16">
          {[82, 81.8, 81.5, 81.2, 81, 80.8, 80.5, 80.2, 79.9, 79.6].map((w, i) => {
            const h = ((82 - w) / (82 - 79.6)) * 100;
            return <div key={i} className="flex-1 bg-violet-200 rounded-sm" style={{ height: `${Math.max(10, h)}%` }} />;
          })}
        </div>
        <div className="flex justify-between text-[9px] text-gray-400 mt-1"><span>82 kg</span><span>79.6 kg</span></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
        <div className="text-xs font-semibold text-gray-700 mb-2">Achievements</div>
        <div className="flex gap-2">
          {[{ icon: "🔥", label: "10 streak" }, { icon: "💪", label: "First PR" }, { icon: "⭐", label: "Perfect week" }].map((a) => (
            <div key={a.label} className="flex-1 flex flex-col items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-xl py-2">
              <span className="text-lg">{a.icon}</span>
              <span className="text-[9px] text-gray-600 font-medium text-center">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── SKILLPATH ─────────────────────────────────────────────
export const SkillPathS1: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-50">
    <AppBar title="SkillPath" />
    <div className="px-4 py-3 bg-white border-b border-gray-100">
      <div className="bg-gray-100 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={12} className="text-gray-400" /><span className="text-xs text-gray-400">Subject or skill...</span>
      </div>
    </div>
    <div className="flex gap-2 px-4 py-2 overflow-hidden border-b border-gray-100 bg-white">
      {["Math", "Physics", "English", "Coding", "History"].map((s, i) => <Pill key={s} label={s} active={i === 3} />)}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        { name: "Carlos M.", subject: "Python & Web Dev", rating: "4.9", sessions: "312 lessons", price: "$45/hr", color: "bg-violet-100 text-violet-700" },
        { name: "Sofía R.", subject: "Data Science", rating: "4.8", sessions: "187 lessons", price: "$55/hr", color: "bg-indigo-100 text-indigo-700" },
        { name: "Tomás B.", subject: "Full Stack Dev", rating: "4.7", sessions: "98 lessons", price: "$50/hr", color: "bg-cyan-100 text-cyan-700" },
      ].map((t) => (
        <div key={t.name} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <Avatar name={t.name} color={t.color} />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-400">{t.subject}</div>
            <div className="flex items-center gap-1"><span className="text-xs text-yellow-400">★</span><span className="text-xs text-gray-500">{t.rating}</span><span className="text-xs text-gray-300">·</span><span className="text-xs text-gray-400">{t.sessions}</span></div>
          </div>
          <div className="text-xs font-bold text-violet-600 shrink-0">{t.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export const SkillPathS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <AppBar title="Book a Lesson" />
    <div className="flex items-center gap-3 px-4 pt-3 pb-3 border-b border-gray-100">
      <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold">C</div>
      <div>
        <div className="text-xs font-bold text-gray-900">Carlos M.</div>
        <div className="text-xs text-gray-400">Python & Web Dev · $45/hr</div>
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-4 overflow-hidden">
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Available this week</div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { day: "Mon", date: "Jun 2", slots: 2 },
            { day: "Wed", date: "Jun 4", slots: 3, active: true },
            { day: "Thu", date: "Jun 5", slots: 1 },
            { day: "Fri", date: "Jun 6", slots: 4 },
          ].map((d) => (
            <div key={d.day} className={`flex flex-col items-center py-2 rounded-xl border text-xs ${d.active ? "border-violet-600 bg-violet-50" : "border-gray-200"}`}>
              <span className={`font-semibold ${d.active ? "text-violet-700" : "text-gray-700"}`}>{d.day}</span>
              <span className="text-gray-400 text-[10px]">{d.date}</span>
              <span className={`text-[10px] font-medium mt-0.5 ${d.active ? "text-violet-600" : "text-gray-400"}`}>{d.slots} slots</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Time slots (Wed)</div>
        <div className="flex gap-2 flex-wrap">
          {["9:00 AM", "2:00 PM", "5:00 PM"].map((t, i) => (
            <span key={t} className={`px-3 py-2 rounded-xl text-xs font-medium border ${i === 1 ? "bg-violet-600 text-white border-violet-600" : "bg-white text-gray-700 border-gray-200"}`}>{t}</span>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Duration</div>
        <div className="flex gap-2">
          {["1 hour · $45", "2 hours · $85"].map((d, i) => (
            <span key={d} className={`flex-1 py-2 rounded-xl text-xs font-medium border text-center ${i === 0 ? "bg-violet-600 text-white border-violet-600" : "border-gray-200 text-gray-600"}`}>{d}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white text-xs font-semibold">Confirm & Pay · $45</button>
    </div>
  </div>
);

export const SkillPathS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-900">
    <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold">C</div>
        <div>
          <div className="text-xs font-semibold text-white">Carlos M.</div>
          <div className="text-[10px] text-gray-400">Python & Web Dev</div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs text-gray-400">42:18</span>
      </div>
    </div>
    <div className="flex-1 bg-gray-800 flex items-center justify-center relative">
      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-60">
          <div className="w-14 h-14 rounded-full bg-violet-400 flex items-center justify-center text-xl font-bold text-white">C</div>
          <span className="text-xs text-gray-300">Carlos M.</span>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 w-16 h-20 bg-gray-600 rounded-lg border-2 border-gray-500 flex items-center justify-center">
        <span className="text-xs text-gray-300 font-medium">You</span>
      </div>
    </div>
    <div className="flex items-center justify-around px-4 py-4 bg-gray-900">
      <button className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"><Video size={16} className="text-white" /></div>
        <span className="text-[9px] text-gray-400">Camera</span>
      </button>
      <button className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"><MessageSquare size={16} className="text-white" /></div>
        <span className="text-[9px] text-gray-400">Chat</span>
      </button>
      <button className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center"><Phone size={18} className="text-white" /></div>
        <span className="text-[9px] text-gray-400">End</span>
      </button>
      <button className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"><BookOpen size={16} className="text-white" /></div>
        <span className="text-[9px] text-gray-400">Notes</span>
      </button>
    </div>
  </div>
);

// ─── EXPORT MAP ────────────────────────────────────────────
export const mockups: Record<string, [React.FC, React.FC, React.FC]> = {
  stylego: [StyleGoS1, StyleGoS2, StyleGoS3],
  fixit: [FixItS1, FixItS2, FixItS3],
  petcare: [PetCareS1, PetCareS2, PetCareS3],
  moveit: [MoveItS1, MoveItS2, MoveItS3],
  tableorder: [TableOrderS1, TableOrderS2, TableOrderS3],
  freshbox: [FreshBoxS1, FreshBoxS2, FreshBoxS3],
  paytrack: [PayTrackS1, PayTrackS2, PayTrackS3],
  spliteasy: [SplitEasyS1, SplitEasyS2, SplitEasyS3],
  storedesk: [StoreDeskS1, StoreDeskS2, StoreDeskS3],
  mindspace: [MindSpaceS1, MindSpaceS2, MindSpaceS3],
  fitcoach: [FitCoachS1, FitCoachS2, FitCoachS3],
  skillpath: [SkillPathS1, SkillPathS2, SkillPathS3],
};
