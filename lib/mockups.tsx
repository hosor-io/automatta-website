"use client";
import React from "react";
import {
  Search, Check, ChevronRight, Plus, MessageSquare,
  Navigation, Clock, Wrench, Truck, Calendar,
  QrCode, ShoppingBag, Package, RefreshCw, Leaf, Users,
  Bell, Scale, ShoppingCart, Video, Lock,
  Dumbbell, TrendingUp, Trophy, ArrowLeft,
  Stethoscope, PawPrint, MapPin, Star, Phone, CreditCard,
  Zap, BarChart3, CheckCircle2, Heart, BookOpen,
} from "lucide-react";

// ─── SHARED PRIMITIVES ─────────────────────────────────────

const GradientHeader = ({
  title,
  subtitle,
  grad,
  icon,
}: {
  title: string;
  subtitle?: string;
  grad: string;
  icon?: React.ReactNode;
}) => (
  <div className={`${grad} px-4 pt-4 pb-5`}>
    <div className="flex items-center gap-2 mb-1">
      {icon && <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">{icon}</div>}
      <span className="text-white font-bold text-sm">{title}</span>
    </div>
    {subtitle && <p className="text-white/70 text-[10px]">{subtitle}</p>}
  </div>
);

const NavBar = ({ items }: { items: { icon: React.ReactNode; label: string; active?: boolean; color?: string }[] }) => (
  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex pb-1">
    {items.map((item) => (
      <button key={item.label} className={`flex-1 flex flex-col items-center pt-2 pb-1 gap-0.5 ${item.active ? (item.color || "text-violet-600") : "text-gray-300"}`}>
        {item.icon}
        <span className="text-[8px] font-medium">{item.label}</span>
      </button>
    ))}
  </div>
);

const StatCard = ({ label, value, sub, bg, text }: { label: string; value: string; sub?: string; bg: string; text: string }) => (
  <div className={`${bg} rounded-2xl p-3 flex-1`}>
    <div className={`text-[10px] ${text} opacity-70 mb-0.5`}>{label}</div>
    <div className={`text-base font-bold ${text}`}>{value}</div>
    {sub && <div className={`text-[9px] ${text} opacity-60`}>{sub}</div>}
  </div>
);

const AvatarCircle = ({ initials, bg }: { initials: string; bg: string }) => (
  <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center text-sm font-bold text-white shrink-0`}>{initials}</div>
);

const Chip = ({ label, active, color }: { label: string; active?: boolean; color?: string }) => (
  <span className={`px-3 py-1 rounded-full text-[10px] font-semibold shrink-0 ${active ? (color || "bg-violet-600 text-white") : "bg-gray-100 text-gray-500"}`}>{label}</span>
);

const Tag = ({ label, color }: { label: string; color: string }) => (
  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${color}`}>{label}</span>
);

const Stars = () => <span className="text-amber-400 text-[10px]">★★★★★</span>;

// ─── STYLEGO ───────────────────────────────────────────────

export const StyleGoS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F8F5FF] relative">
    <div className="bg-gradient-to-r from-violet-600 to-purple-500 px-4 pt-4 pb-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-white font-bold text-base">StyleGo</div>
          <div className="text-violet-200 text-[10px]">Stylists near you</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <MapPin size={14} className="text-white" />
        </div>
      </div>
      <div className="bg-white rounded-xl flex items-center gap-2 px-3 py-2.5 shadow-sm">
        <Search size={12} className="text-violet-400" />
        <span className="text-[11px] text-gray-400">Hair, nails, makeup…</span>
      </div>
    </div>
    <div className="flex gap-2 px-4 py-2 -mt-3 overflow-hidden">
      {["All","Hair","Nails","Barber"].map((c,i)=><Chip key={c} label={c} active={i===0}/>)}
    </div>
    <div className="flex-1 px-4 space-y-2 overflow-hidden pb-14 mt-1">
      {[
        {name:"Sofia M.",spec:"Hair & Color",r:"4.9",d:"0.8km",p:"$35",bg:"bg-violet-500",avail:true},
        {name:"Carlos R.",spec:"Barbershop",r:"4.8",d:"1.2km",p:"$25",bg:"bg-blue-500",avail:true},
        {name:"Ana L.",spec:"Nail Art",r:"4.7",d:"2.1km",p:"$28",bg:"bg-pink-500",avail:false},
      ].map(s=>(
        <div key={s.name} className="bg-white rounded-2xl px-3 py-3 flex items-center gap-3 shadow-sm">
          <AvatarCircle initials={s.name[0]} bg={s.bg} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-gray-900">{s.name}</span>
              {s.avail && <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"/>}
            </div>
            <div className="text-[10px] text-gray-400">{s.spec} · {s.d}</div>
            <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-[10px] text-gray-500 font-medium">{s.r}</span></div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-sm font-bold text-violet-600">{s.p}</div>
            <div className="text-[9px] text-gray-400">/ session</div>
          </div>
        </div>
      ))}
    </div>
    <NavBar items={[{icon:<Search size={14}/>,label:"Explore",active:true},{icon:<Calendar size={14}/>,label:"Bookings"},{icon:<MessageSquare size={14}/>,label:"Chat"},{icon:<Users size={14}/>,label:"Profile"}]}/>
  </div>
);

export const StyleGoS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 px-4 pt-4 pb-8">
      <div className="flex items-center gap-2 mb-3">
        <ArrowLeft size={14} className="text-white/70" />
        <span className="text-white/70 text-xs">Back</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center text-2xl font-bold border border-white/30">S</div>
        <div>
          <div className="text-white font-bold text-sm">Sofia Martinez</div>
          <div className="text-white/70 text-[10px]">Hair & Color Specialist</div>
          <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-white text-[10px] font-semibold">4.9</span><span className="text-white/60 text-[10px]">(142)</span></div>
        </div>
      </div>
    </div>
    <div className="flex gap-3 px-4 -mt-4 mb-3">
      <div className="flex-1 bg-white rounded-xl shadow-md p-2 text-center border border-gray-100">
        <div className="text-sm font-bold text-violet-600">4.9</div>
        <div className="text-[9px] text-gray-400">Rating</div>
      </div>
      <div className="flex-1 bg-white rounded-xl shadow-md p-2 text-center border border-gray-100">
        <div className="text-sm font-bold text-gray-900">142</div>
        <div className="text-[9px] text-gray-400">Reviews</div>
      </div>
      <div className="flex-1 bg-white rounded-xl shadow-md p-2 text-center border border-gray-100">
        <div className="text-sm font-bold text-green-600">Now</div>
        <div className="text-[9px] text-gray-400">Available</div>
      </div>
    </div>
    <div className="flex-1 px-4 space-y-2 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Services</div>
      {[{s:"Haircut",t:"45 min",p:"$35",color:"bg-violet-50 border-violet-100"},{s:"Color",t:"2 hrs",p:"$75",color:"bg-purple-50 border-purple-100"},{s:"Treatment",t:"1 hr",p:"$55",color:"bg-pink-50 border-pink-100"}].map(sv=>(
        <div key={sv.s} className={`flex items-center justify-between px-3 py-2.5 rounded-xl border ${sv.color}`}>
          <div>
            <div className="text-xs font-semibold text-gray-900">{sv.s}</div>
            <div className="text-[10px] text-gray-400">{sv.t}</div>
          </div>
          <div className="text-sm font-bold text-gray-900">{sv.p}</div>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-bold shadow-lg shadow-violet-200">Book Now →</button>
    </div>
  </div>
);

export const StyleGoS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 px-4 pt-6 pb-8 flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mb-2">
        <CheckCircle2 size={28} className="text-white" />
      </div>
      <div className="text-white font-bold text-base">Booking Confirmed!</div>
      <div className="text-white/70 text-[10px] text-center mt-1">Sofia will come to you. Get ready!</div>
    </div>
    <div className="flex-1 px-4 -mt-3">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-3 space-y-2.5">
        {[{l:"Stylist",v:"Sofia Martinez"},{l:"Service",v:"Haircut · $35"},{l:"Date",v:"Friday, Jun 6"},{l:"Time",v:"11:00 AM"},{l:"Location",v:"Your address"}].map(i=>(
          <div key={i.l} className="flex justify-between">
            <span className="text-[10px] text-gray-400">{i.l}</span>
            <span className="text-[10px] font-semibold text-gray-900">{i.v}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-bold shadow-md shadow-violet-200 mb-2">View in Maps</button>
      <button className="w-full py-3 rounded-2xl border border-gray-200 text-gray-600 text-xs font-medium">Message Sofia</button>
    </div>
  </div>
);

// ─── FIXIT ─────────────────────────────────────────────────

export const FixItS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F4FF]">
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 pt-4 pb-5">
      <div className="text-white font-bold text-base mb-0.5">FixIt</div>
      <div className="text-blue-100 text-[10px]">Home repairs, on demand</div>
    </div>
    <div className="px-4 pt-3 pb-2">
      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">What do you need?</div>
      <div className="grid grid-cols-3 gap-2">
        {[
          {icon:<Wrench size={16}/>,label:"Plumbing",active:true,color:"from-blue-500 to-cyan-500"},
          {icon:<Zap size={16}/>,label:"Electrical",color:""},
          {icon:<Package size={16}/>,label:"Painting",color:""},
          {icon:<RefreshCw size={16}/>,label:"A/C",color:""},
          {icon:<Lock size={16}/>,label:"Locks",color:""},
          {icon:<Truck size={16}/>,label:"Moving",color:""},
        ].map(item=>(
          <div key={item.label} className={`flex flex-col items-center gap-1 py-3 rounded-xl text-[10px] font-semibold ${item.active ? `bg-gradient-to-br ${item.color} text-white shadow-md shadow-blue-200` : "bg-white text-gray-600 border border-gray-100 shadow-sm"}`}>
            <span className={item.active?"text-white":"text-blue-500"}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
    <div className="mx-4 mt-2 bg-orange-50 border border-orange-200 rounded-xl px-3 py-2 flex items-center gap-2">
      <Bell size={12} className="text-orange-500 shrink-0" />
      <span className="text-[10px] text-orange-700 font-semibold">Emergency service available 24/7</span>
    </div>
    <div className="px-4 mt-3">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md shadow-blue-200">Find a Technician →</button>
    </div>
  </div>
);

export const FixItS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 px-4 pt-4 pb-8">
      <div className="flex items-center gap-2 mb-3">
        <ArrowLeft size={14} className="text-white/70" />
        <span className="text-white/70 text-xs">Results</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center text-2xl font-bold border border-white/30">M</div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">Miguel Torres</span>
            <Tag label="Available" color="bg-green-400/30 text-green-100"/>
          </div>
          <div className="text-blue-100 text-[10px]">Licensed Plumber · 127 jobs</div>
          <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-white text-[10px] font-semibold">4.9</span></div>
        </div>
      </div>
    </div>
    <div className="px-4 -mt-4 mb-3">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex gap-3">
        {[{l:"Rate",v:"$45/hr",c:"text-blue-600"},{l:"Distance",v:"1.4 km",c:"text-gray-700"},{l:"ETA",v:"15 min",c:"text-green-600"}].map(s=>(
          <div key={s.l} className="flex-1 text-center">
            <div className={`text-sm font-bold ${s.c}`}>{s.v}</div>
            <div className="text-[9px] text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 space-y-2 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Verified</div>
      {["Licensed Plumber · Cert. #4829","Background check passed","200+ completed jobs"].map(c=>(
        <div key={c} className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2">
          <Check size={12} className="text-green-500 shrink-0" />
          <span className="text-[10px] text-gray-700 font-medium">{c}</span>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md shadow-blue-200">Request Service · $45/hr →</button>
    </div>
  </div>
);

export const FixItS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F4FF]">
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Job in Progress</div>
      <div className="text-blue-100 text-[10px]">Miguel is on the way</div>
    </div>
    <div className="px-4 pt-4">
      <div className="bg-white rounded-2xl shadow-md p-4 mb-4 flex flex-col items-center border border-blue-50">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-2 border-4 border-blue-200">
          <Navigation size={24} className="text-blue-600" />
        </div>
        <div className="text-2xl font-black text-gray-900">12 min</div>
        <div className="text-[10px] text-gray-400 font-medium">ETA to your location</div>
      </div>
      <div className="flex items-center justify-between mb-4">
        {["Confirmed","En Route","Arrived","Done"].map((step,i)=>(
          <React.Fragment key={step}>
            <div className={`flex flex-col items-center gap-1 ${i<=1?"text-blue-600":"text-gray-300"}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black ${i<=1?"bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm":"bg-gray-100 text-gray-400"}`}>{i+1}</div>
              <span className="text-[8px] font-semibold">{step}</span>
            </div>
            {i<3&&<div className={`flex-1 h-0.5 mx-0.5 ${i<1?"bg-gradient-to-r from-blue-600 to-cyan-500":"bg-gray-200"}`}/>}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-3">
        <AvatarCircle initials="M" bg="bg-blue-500" />
        <div className="flex-1">
          <div className="text-xs font-bold text-gray-900">Miguel Torres</div>
          <div className="text-[10px] text-gray-400">Plumbing · $45/hr</div>
        </div>
        <button className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><Phone size={14} className="text-blue-600" /></button>
      </div>
    </div>
  </div>
);

// ─── PETCARE ───────────────────────────────────────────────

export const PetCareS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#FFF8F0]">
    <div className="bg-gradient-to-r from-amber-500 to-orange-400 px-4 pt-4 pb-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-white font-bold text-base">PetCare</div>
          <div className="text-amber-100 text-[10px]">Care for your furry family</div>
        </div>
        <Bell size={16} className="text-white/70" />
      </div>
      <div className="bg-white/20 border border-white/30 rounded-xl px-3 py-2 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-base">🐕</div>
        <div>
          <div className="text-white font-bold text-xs">Luna</div>
          <div className="text-white/70 text-[9px]">Golden Retriever · 3 yrs</div>
        </div>
        <ChevronRight size={14} className="text-white/60 ml-auto" />
      </div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">What does Luna need?</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          {icon:<Stethoscope size={18}/>,label:"Vet Visit",price:"From $40",active:true,grad:"from-amber-500 to-orange-400"},
          {icon:<Users size={18}/>,label:"Grooming",price:"From $30",grad:""},
          {icon:<Check size={18}/>,label:"Vaccines",price:"From $25",grad:""},
          {icon:<Bell size={18}/>,label:"Emergency",price:"24/7",grad:"",red:true},
        ].map(item=>(
          <div key={item.label} className={`flex flex-col items-center gap-1 py-4 rounded-2xl text-center ${item.active?`bg-gradient-to-br ${item.grad} shadow-md shadow-amber-200`:item.red?"bg-red-50 border border-red-100":"bg-white border border-gray-100 shadow-sm"}`}>
            <span className={item.active?"text-white":item.red?"text-red-500":"text-amber-500"}>{item.icon}</span>
            <span className={`text-[10px] font-bold ${item.active?"text-white":item.red?"text-red-600":"text-gray-800"}`}>{item.label}</span>
            <span className={`text-[9px] ${item.active?"text-white/70":item.red?"text-red-400":"text-gray-400"}`}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PetCareS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-amber-500 to-orange-400 px-4 pt-4 pb-7">
      <div className="flex items-center gap-2 mb-3">
        <ArrowLeft size={14} className="text-white/70" />
        <span className="text-white/70 text-xs">Vets near you</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-xl font-bold text-white">G</div>
        <div>
          <div className="text-white font-bold text-sm">Dr. García</div>
          <div className="text-amber-100 text-[10px]">General Veterinarian</div>
          <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-white text-[10px]">4.9</span><span className="text-white/60 text-[10px]">(98)</span></div>
        </div>
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Available today</div>
      <div className="flex gap-2 mb-3 flex-wrap">
        {["10:00 AM","2:00 PM","4:30 PM"].map((t,i)=>(
          <span key={t} className={`px-3 py-2 rounded-xl text-[10px] font-bold border ${i===1?"bg-amber-500 text-white border-amber-500 shadow-sm":"bg-gray-50 text-gray-700 border-gray-200"}`}>{t}</span>
        ))}
      </div>
      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Your pet</div>
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 mb-3">
        <span className="text-base">🐕</span>
        <div className="flex-1">
          <div className="text-xs font-bold text-gray-900">Luna</div>
          <div className="text-[10px] text-gray-400">Golden Retriever</div>
        </div>
        <Check size={14} className="text-amber-500" />
      </div>
      <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl px-3 py-2.5">
        <span className="text-[10px] text-gray-700 font-medium">Vet Visit at home</span>
        <span className="text-sm font-bold text-amber-600">$40</span>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 text-white text-xs font-bold shadow-md shadow-amber-200">Confirm · $40 →</button>
    </div>
  </div>
);

export const PetCareS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#FFF8F0]">
    <div className="bg-gradient-to-r from-amber-500 to-orange-400 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Dr. García is on the way!</div>
      <div className="text-amber-100 text-[10px]">Estimated arrival: 18 min</div>
    </div>
    <div className="px-4 pt-4">
      <div className="bg-white rounded-2xl shadow-md p-4 mb-4 flex flex-col items-center border border-amber-50">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-2 border-4 border-amber-200">
          <PawPrint size={24} className="text-amber-500" />
        </div>
        <div className="text-2xl font-black text-gray-900">18 min</div>
        <div className="text-[10px] text-gray-400 font-medium">ETA to your home</div>
      </div>
      <div className="space-y-2">
        {[
          {step:"Booking confirmed",done:true},
          {step:"Vet heading to your location",done:true},
          {step:"Vet arrived",done:false},
          {step:"Appointment completed",done:false},
        ].map(s=>(
          <div key={s.step} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${s.done?"bg-gradient-to-br from-amber-500 to-orange-400":"bg-gray-200"}`}>
              {s.done?<Check size={10} className="text-white"/>:<div className="w-1.5 h-1.5 rounded-full bg-gray-400"/>}
            </div>
            <span className={`text-[10px] font-medium ${s.done?"text-gray-900":"text-gray-400"}`}>{s.step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── MOVEIT ────────────────────────────────────────────────

export const MoveItS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F2FF]">
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-4 pt-4 pb-5">
      <div className="text-white font-bold text-base mb-0.5">MoveIt</div>
      <div className="text-indigo-200 text-[10px]">Moving made simple</div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">How big is your move?</div>
      <div className="space-y-2 mb-3">
        {[
          {label:"Studio / Bedroom",size:"~10 items",price:"$120–$160"},
          {label:"1 Bedroom",size:"~25 items",price:"$160–$200",active:true},
          {label:"2 Bedrooms",size:"~40 items",price:"$220–$280"},
          {label:"3+ Bedrooms",size:"50+ items",price:"$320+"},
        ].map(o=>(
          <div key={o.label} className={`flex items-center justify-between px-4 py-3 rounded-2xl border ${o.active?"bg-gradient-to-r from-indigo-600 to-blue-500 border-indigo-500 shadow-md shadow-indigo-200":"bg-white border-gray-100 shadow-sm"}`}>
            <div>
              <div className={`text-[10px] font-bold ${o.active?"text-white":"text-gray-900"}`}>{o.label}</div>
              <div className={`text-[9px] ${o.active?"text-indigo-200":"text-gray-400"}`}>{o.size}</div>
            </div>
            <div className={`text-xs font-black ${o.active?"text-white":"text-indigo-600"}`}>{o.price}</div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-3 text-center">
        <div className="text-[10px] text-gray-500">Your estimate</div>
        <div className="text-xl font-black text-indigo-600">$160 – $200</div>
        <div className="text-[9px] text-gray-400">2 movers + truck included</div>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs font-bold shadow-md shadow-indigo-200">Find Available Movers →</button>
    </div>
  </div>
);

export const MoveItS2: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F2FF]">
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Choose Your Mover</div>
      <div className="text-indigo-200 text-[10px]">2 available now</div>
    </div>
    <div className="px-4 pt-3 space-y-3 flex-1 overflow-hidden">
      {[
        {name:"Carlos & Team",truck:"3-ton truck",r:"4.9",jobs:"312 moves",price:"$175",eta:"Now",bg:"bg-indigo-500"},
        {name:"ProMovers",truck:"5-ton truck",r:"4.8",jobs:"198 moves",price:"$195",eta:"In 1 hr",bg:"bg-blue-500"},
      ].map(m=>(
        <div key={m.name} className="bg-white rounded-2xl overflow-hidden shadow-md border border-indigo-50">
          <div className="p-3 flex items-start gap-3">
            <AvatarCircle initials={m.name[0]} bg={m.bg} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-900">{m.name}</span>
                <Tag label={m.eta} color="bg-green-100 text-green-700"/>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-400"><Truck size={9}/>{m.truck}</div>
              <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-[10px] text-gray-500 font-medium">{m.r}</span><span className="text-[10px] text-gray-300">·</span><span className="text-[10px] text-gray-400">{m.jobs}</span></div>
            </div>
            <div className="text-sm font-black text-indigo-600">{m.price}</div>
          </div>
          <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2.5 text-[10px] font-bold">Select · {m.price} →</button>
        </div>
      ))}
    </div>
  </div>
);

export const MoveItS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F2FF]">
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Your move is in progress</div>
      <div className="text-indigo-200 text-[10px]">Carlos & Team</div>
    </div>
    <div className="px-4 pt-4">
      <div className="bg-white rounded-2xl shadow-md p-4 mb-4 flex flex-col items-center border border-indigo-50">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mb-2 border-4 border-indigo-200">
          <Truck size={22} className="text-indigo-600" />
        </div>
        <div className="text-2xl font-black text-gray-900">25 min</div>
        <div className="text-[10px] text-gray-400">until delivery</div>
      </div>
      <div className="space-y-2">
        {[
          {label:"Loading items",time:"10:30 AM",done:true},
          {label:"In transit",time:"11:15 AM",done:true},
          {label:"Unloading at destination",time:"~11:45 AM",done:false},
          {label:"Move completed",time:"~12:00 PM",done:false},
        ].map(s=>(
          <div key={s.label} className="flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 shadow-sm border border-gray-50">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${s.done?"bg-gradient-to-br from-indigo-600 to-blue-500":"bg-gray-100"}`}>
              {s.done?<Check size={10} className="text-white"/>:<div className="w-1.5 h-1.5 rounded-full bg-gray-300"/>}
            </div>
            <span className={`flex-1 text-[10px] font-medium ${s.done?"text-gray-900":"text-gray-400"}`}>{s.label}</span>
            <span className="text-[9px] text-gray-400">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── TABLEORDER ────────────────────────────────────────────

export const TableOrderS1: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-3 pb-3">
      <div className="text-white font-bold text-sm">La Trattoria</div>
      <div className="flex items-center gap-1.5">
        <Star size={10} className="text-yellow-300 fill-yellow-300" />
        <span className="text-orange-100 text-[10px] font-medium">4.8 · Italian · $$</span>
      </div>
    </div>
    <div className="flex gap-2 px-4 py-2 border-b border-gray-100 overflow-hidden">
      {["Starters","Pasta","Pizza","Desserts"].map((c,i)=>(
        <button key={c} className={`px-3 py-1 rounded-full text-[10px] font-bold shrink-0 ${i===1?"bg-orange-500 text-white shadow-sm":"text-gray-400"}`}>{c}</button>
      ))}
    </div>
    <div className="flex-1 px-4 py-2 space-y-2 overflow-hidden">
      {[
        {name:"Spaghetti Bolognese",desc:"Classic beef ragù",price:"$14",emoji:"🍝"},
        {name:"Tagliatelle al Pesto",desc:"Basil pesto, pine nuts",price:"$13",emoji:"🌿"},
        {name:"Carbonara",desc:"Guanciale, pecorino",price:"$15",emoji:"🍳"},
      ].map(item=>(
        <div key={item.name} className="flex items-center gap-3 border-b border-gray-50 pb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center text-2xl shrink-0">{item.emoji}</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-gray-900">{item.name}</div>
            <div className="text-[9px] text-gray-400">{item.desc}</div>
            <div className="text-[10px] font-black text-orange-500 mt-0.5">{item.price}</div>
          </div>
          <button className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center shadow-sm shrink-0"><Plus size={13}/></button>
        </div>
      ))}
    </div>
    <div className="px-4 pb-3">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-md shadow-orange-200 flex items-center justify-center gap-2">
        <ShoppingBag size={14}/>View order · $27
      </button>
    </div>
  </div>
);

export const TableOrderS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-4 pb-4">
      <div className="flex items-center gap-2 mb-2">
        <ArrowLeft size={14} className="text-white/70" />
        <span className="text-white font-bold text-sm">Your Order</span>
      </div>
      <div className="flex gap-1 bg-white/20 rounded-xl p-0.5">
        {["Dine In","Takeout","Delivery"].map((t,i)=>(
          <button key={t} className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold ${i===0?"bg-white text-orange-600":"text-white/70"}`}>{t}</button>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {name:"Spaghetti Bolognese",qty:1,price:"$14.00"},
        {name:"Carbonara",qty:2,price:"$30.00"},
        {name:"Sparkling Water",qty:1,price:"$3.50"},
      ].map(item=>(
        <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[9px] font-black">{item.qty}</div>
            <span className="text-[10px] text-gray-800 font-medium">{item.name}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-900">{item.price}</span>
        </div>
      ))}
      <div className="pt-1 space-y-1.5">
        <div className="flex justify-between text-[10px] text-gray-400"><span>Subtotal</span><span>$47.50</span></div>
        <div className="flex justify-between text-[10px] text-gray-400"><span>Tax (8%)</span><span>$3.80</span></div>
        <div className="flex justify-between text-xs font-black text-gray-900 pt-1 border-t border-gray-100"><span>Total</span><span>$51.30</span></div>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-md shadow-orange-200">Place Order · $51.30 →</button>
    </div>
  </div>
);

export const TableOrderS3: React.FC = () => (
  <div className="h-full flex flex-col bg-gray-100">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3">
      <div className="text-white font-bold text-sm">Kitchen Display</div>
      <div className="text-orange-100 text-[10px]">La Trattoria · Live orders</div>
    </div>
    <div className="flex-1 px-3 pt-3 space-y-2 overflow-hidden">
      {[
        {table:"Table 4",items:["Spaghetti Bolognese","Carbonara ×2"],status:"Preparing",grad:"from-orange-500 to-red-500",timer:"8 min"},
        {table:"Table 7",items:["Tagliatelle al Pesto"],status:"Ready ✓",grad:"from-green-500 to-emerald-500",timer:"Done"},
        {table:"Takeout #12",items:["Carbonara","Water"],status:"New",grad:"from-blue-500 to-indigo-500",timer:"New"},
      ].map(order=>(
        <div key={order.table} className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className={`bg-gradient-to-r ${order.grad} px-3 py-2 flex items-center justify-between`}>
            <span className="text-white font-bold text-xs">{order.table}</span>
            <span className="text-white/80 text-[10px] font-semibold">{order.timer}</span>
          </div>
          <div className="px-3 py-2">
            {order.items.map(i=><div key={i} className="text-[10px] text-gray-600 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-300 inline-block"/>{i}</div>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── FRESHBOX ──────────────────────────────────────────────

export const FreshBoxS1: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-4 pt-4 pb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="text-white font-bold text-sm">This Week's Box</div>
        <button className="text-white/70 text-[10px] font-semibold border border-white/30 rounded-lg px-2 py-0.5">Edit</button>
      </div>
      <div className="text-green-100 text-[10px]">Standard Plan · Delivery Thursday</div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="space-y-2">
        {[
          {item:"Organic Tomatoes",weight:"500g",emoji:"🍅"},
          {item:"Avocados",weight:"×2",emoji:"🥑"},
          {item:"Butter Lettuce",weight:"1 head",emoji:"🥬"},
          {item:"Baby Carrots",weight:"300g",emoji:"🥕"},
          {item:"Broccoli",weight:"400g",emoji:"🥦"},
        ].map(p=>(
          <div key={p.item} className="flex items-center gap-3 bg-green-50 rounded-xl px-3 py-2 border border-green-100">
            <span className="text-xl">{p.emoji}</span>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-gray-900">{p.item}</div>
              <div className="text-[9px] text-gray-400">{p.weight}</div>
            </div>
            <Tag label="Fresh" color="bg-green-200 text-green-700"/>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-1.5 mt-3 text-[10px] text-green-600 font-bold"><Plus size={12}/>Add or swap items</button>
    </div>
  </div>
);

export const FreshBoxS2: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0FFF4]">
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Choose a Plan</div>
      <div className="text-green-100 text-[10px]">Fresh from local farms</div>
    </div>
    <div className="px-4 pt-3 space-y-3 flex-1 overflow-hidden">
      {[
        {name:"Basic",items:"8–10 items",price:"$29",freq:"/wk",desc:"For 1–2 people"},
        {name:"Standard",items:"12–14 items",price:"$49",freq:"/wk",desc:"Ideal for families",active:true},
        {name:"Premium",items:"18–20 items",price:"$79",freq:"/wk",desc:"Fully stocked kitchen"},
      ].map(plan=>(
        <div key={plan.name} className={`rounded-2xl p-3 border ${plan.active?"bg-gradient-to-br from-green-600 to-emerald-500 border-green-500 shadow-md shadow-green-200":"bg-white border-gray-100 shadow-sm"}`}>
          <div className="flex items-start justify-between">
            <div>
              <div className={`text-xs font-bold ${plan.active?"text-white":"text-gray-900"}`}>{plan.name}</div>
              <div className={`text-[10px] ${plan.active?"text-green-100":"text-gray-500"}`}>{plan.desc}</div>
              <div className={`text-[9px] ${plan.active?"text-green-200":"text-gray-400"}`}>{plan.items}</div>
            </div>
            <div className="text-right">
              <span className={`text-base font-black ${plan.active?"text-white":"text-green-600"}`}>{plan.price}</span>
              <span className={`text-[9px] ${plan.active?"text-green-200":"text-gray-400"}`}>{plan.freq}</span>
              {plan.active&&<div className="mt-0.5"><Tag label="Selected ✓" color="bg-white/30 text-white"/></div>}
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-white rounded-xl border border-green-100 p-2.5 shadow-sm">
        <Leaf size={13} className="text-green-500 shrink-0" />
        <span className="text-[10px] text-gray-600 font-medium">From 12+ local farms in your region</span>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs font-bold shadow-md shadow-green-200">Start Subscription · $49/wk →</button>
    </div>
  </div>
);

export const FreshBoxS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0FFF4]">
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Delivery Tracking</div>
      <div className="text-green-100 text-[10px]">Standard Plan · Jun 6</div>
    </div>
    <div className="px-4 pt-4">
      <div className="bg-white rounded-2xl shadow-md p-4 mb-4 text-center border border-green-50">
        <div className="text-[10px] text-gray-400 mb-1">Next delivery</div>
        <div className="text-base font-black text-gray-900">Thursday, Jun 6</div>
        <div className="text-[10px] text-green-600 font-bold">Between 8:00 AM – 12:00 PM</div>
      </div>
      <div className="space-y-3">
        {[
          {label:"Order placed",detail:"Sun, Jun 2 · 9:00 AM",done:true},
          {label:"Box packed at farm",detail:"Wed, Jun 5",done:true},
          {label:"Out for delivery",detail:"Thu, Jun 6 · 8:00 AM",done:false},
          {label:"Delivered!",detail:"Expected by 12:00 PM",done:false},
        ].map(s=>(
          <div key={s.label} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${s.done?"bg-gradient-to-br from-green-500 to-emerald-500":"bg-gray-200"}`}>
              {s.done?<Check size={10} className="text-white"/>:<div className="w-1.5 h-1.5 rounded-full bg-gray-300"/>}
            </div>
            <div>
              <div className={`text-[10px] font-bold ${s.done?"text-gray-900":"text-gray-400"}`}>{s.label}</div>
              <div className="text-[9px] text-gray-400">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── PAYTRACK ──────────────────────────────────────────────

export const PayTrackS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F5F0FF]">
    <div className="bg-gradient-to-r from-violet-700 to-purple-600 px-4 pt-4 pb-5">
      <div className="flex items-center justify-between mb-1">
        <div>
          <div className="text-white font-bold text-base">PayTrack</div>
          <div className="text-violet-200 text-[10px]">Your billing dashboard</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Plus size={14} className="text-white" />
        </div>
      </div>
    </div>
    <div className="flex gap-2 px-4 py-2 border-b border-gray-100 bg-white overflow-hidden">
      {["All","Pending","Paid","Overdue"].map((t,i)=>(
        <button key={t} className={`px-3 py-1 rounded-full text-[10px] font-bold ${i===0?"bg-violet-100 text-violet-700":"text-gray-400"}`}>{t}</button>
      ))}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {client:"Acme Corp",desc:"Website redesign",amount:"$3,200",status:"Paid",grad:"from-green-500 to-emerald-500",tag:"bg-green-100 text-green-700"},
        {client:"StartupXYZ",desc:"Mobile app · Phase 2",amount:"$4,800",status:"Pending",grad:"",tag:"bg-yellow-100 text-yellow-700"},
        {client:"RetailCo",desc:"SEO consulting",amount:"$750",status:"Overdue",grad:"",tag:"bg-red-100 text-red-700"},
      ].map(inv=>(
        <div key={inv.client} className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[10px] font-bold text-gray-900">{inv.client}</div>
              <div className="text-[9px] text-gray-400">{inv.desc}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-black text-gray-900">{inv.amount}</div>
              <Tag label={inv.status} color={inv.tag}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PayTrackS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-violet-700 to-purple-600 px-4 pt-4 pb-4">
      <div className="flex items-center gap-2 mb-1">
        <ArrowLeft size={14} className="text-white/70" />
        <span className="text-white font-bold text-sm">New Invoice</span>
      </div>
      <div className="text-violet-200 text-[10px]">Fill in the details below</div>
    </div>
    <div className="flex-1 px-4 pt-4 space-y-3 overflow-hidden">
      {[
        {label:"Client",value:"StartupXYZ"},
        {label:"Project",value:"Mobile App · Phase 3"},
        {label:"Amount",value:"$5,400.00",highlight:true},
        {label:"Due Date",value:"Jun 30, 2025"},
      ].map(field=>(
        <div key={field.label}>
          <div className="text-[9px] text-gray-400 font-semibold mb-1 uppercase tracking-wider">{field.label}</div>
          <div className={`border rounded-xl px-3 py-2.5 text-xs font-bold flex items-center justify-between ${field.highlight?"border-violet-300 bg-violet-50 text-violet-700":"border-gray-200 text-gray-900 bg-gray-50"}`}>
            {field.value}<ChevronRight size={12} className="text-gray-300"/>
          </div>
        </div>
      ))}
      <div>
        <div className="text-[9px] text-gray-400 font-semibold mb-1 uppercase tracking-wider">Line items</div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {[{desc:"UI Design",qty:"40h",price:"$2,800"},{desc:"Development",qty:"24h",price:"$2,600"}].map(li=>(
            <div key={li.desc} className="flex items-center justify-between px-3 py-2 border-b border-gray-50 last:border-0">
              <span className="text-[10px] text-gray-700 font-medium">{li.desc}</span>
              <span className="text-[9px] text-gray-400">{li.qty}</span>
              <span className="text-[10px] font-black text-violet-600">{li.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-700 to-purple-600 text-white text-xs font-bold shadow-md shadow-violet-200">Preview & Send Invoice →</button>
    </div>
  </div>
);

export const PayTrackS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F5F0FF]">
    <div className="bg-gradient-to-r from-violet-700 to-purple-600 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Revenue Dashboard</div>
      <div className="text-violet-200 text-[10px]">June 2025</div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="bg-white rounded-2xl p-4 mb-3 shadow-md border border-violet-50">
        <div className="text-[10px] text-gray-400 mb-1">Revenue this month</div>
        <div className="text-2xl font-black text-violet-700">$8,420</div>
        <div className="flex items-center gap-1 mt-1 text-[10px] text-green-600 font-bold"><TrendingUp size={10}/>+12% vs last month</div>
      </div>
      <div className="flex gap-2 mb-3">
        <StatCard label="Unpaid" value="$2,100" sub="2 invoices" bg="bg-yellow-50" text="text-yellow-700"/>
        <StatCard label="Collected" value="$6,320" sub="5 invoices" bg="bg-green-50" text="text-green-700"/>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm">
        <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Monthly trend</div>
        <div className="flex items-end justify-between gap-1 h-12">
          {[40,55,45,70,60,85,75,90,65,100,80,95].map((h,i)=>(
            <div key={i} className={`flex-1 rounded-sm ${i===11?"bg-violet-600":"bg-violet-200"}`} style={{height:`${h}%`}}/>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── SPLITEASY ─────────────────────────────────────────────

export const SplitEasyS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#FAF0FF]">
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 pt-4 pb-5">
      <div className="text-white font-bold text-base mb-0.5">Mexico Trip 🏖️</div>
      <div className="flex items-center justify-between">
        <div className="text-purple-100 text-[10px]">4 people · 8 expenses</div>
        <div className="text-white font-black text-sm">$1,240</div>
      </div>
      <div className="flex -space-x-1.5 mt-2">
        {[{n:"Y",bg:"bg-purple-400"},{n:"C",bg:"bg-blue-400"},{n:"M",bg:"bg-pink-400"},{n:"A",bg:"bg-green-400"}].map(p=>(
          <div key={p.n} className={`w-7 h-7 rounded-full ${p.bg} border-2 border-white flex items-center justify-center text-[10px] font-black text-white`}>{p.n}</div>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {desc:"Hotel deposit",paid:"You",amount:"$420"},
        {desc:"Dinner at El Patron",paid:"Carlos",amount:"$180"},
        {desc:"Taxi to airport",paid:"María",amount:"$64"},
        {desc:"Snorkeling tour",paid:"You",amount:"$240"},
      ].map(exp=>(
        <div key={exp.desc} className="bg-white rounded-xl px-3 py-2.5 flex items-center justify-between border border-purple-50 shadow-sm">
          <div>
            <div className="text-[10px] font-bold text-gray-900">{exp.desc}</div>
            <div className="text-[9px] text-gray-400">Paid by {exp.paid} · 4 people</div>
          </div>
          <span className="text-xs font-black text-purple-600">{exp.amount}</span>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold shadow-md shadow-purple-200 flex items-center justify-center gap-2"><Plus size={14}/>Add Expense</button>
    </div>
  </div>
);

export const SplitEasyS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 pt-4 pb-4">
      <div className="flex items-center gap-2 mb-1">
        <ArrowLeft size={14} className="text-white/70"/>
        <span className="text-white font-bold text-sm">Add Expense</span>
      </div>
      <div className="text-purple-100 text-[10px]">Mexico Trip 🏖️</div>
    </div>
    <div className="flex-1 px-4 pt-4 space-y-3 overflow-hidden">
      <div>
        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Description</div>
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-[10px] text-gray-900 bg-gray-50 font-medium">Cenote entrance + lunch</div>
      </div>
      <div>
        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Amount</div>
        <div className="border-2 border-purple-400 rounded-xl px-3 py-2.5 text-lg font-black text-purple-700 bg-purple-50">$85.00</div>
      </div>
      <div>
        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Paid by</div>
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-[10px] bg-purple-50 flex justify-between items-center font-bold text-purple-700">You<ChevronRight size={12} className="text-gray-300"/></div>
      </div>
      <div>
        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-2">Split method</div>
        <div className="grid grid-cols-3 gap-2">
          {["Equally","By %","Custom"].map((m,i)=>(
            <button key={m} className={`py-2 rounded-xl text-[10px] font-bold border ${i===0?"bg-gradient-to-r from-purple-600 to-pink-500 text-white border-purple-500":"border-gray-200 text-gray-500"}`}>{m}</button>
          ))}
        </div>
      </div>
      <div className="bg-purple-50 border border-purple-100 rounded-xl px-3 py-2 text-center">
        <span className="text-[10px] text-gray-500">Each person pays </span>
        <span className="text-xs font-black text-purple-700">$21.25</span>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold shadow-md shadow-purple-200">Save Expense →</button>
    </div>
  </div>
);

export const SplitEasyS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#FAF0FF]">
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Balances</div>
      <div className="text-purple-100 text-[10px]">Mexico Trip 🏖️</div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-md p-4 mb-3 text-center border border-purple-50">
        <div className="text-[10px] text-gray-400 mb-0.5">You are owed</div>
        <div className="text-2xl font-black text-purple-700">$124.50</div>
      </div>
      <div className="space-y-2 mb-3">
        {[
          {name:"Carlos R.",owes:"owes you",amount:"$67.00",bg:"bg-blue-500"},
          {name:"María G.",owes:"owes you",amount:"$57.50",bg:"bg-pink-500"},
          {name:"Ana L.",owes:"settled up",amount:"$0",bg:"bg-green-500"},
        ].map(b=>(
          <div key={b.name} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-3 border border-gray-100 shadow-sm">
            <AvatarCircle initials={b.name[0]} bg={b.bg}/>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-gray-900">{b.name}</div>
              <div className="text-[9px] text-gray-400">{b.owes}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-gray-900">{b.amount}</div>
              {b.amount!=="$0"&&<button className="text-[9px] text-purple-600 font-bold">Remind</button>}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold shadow-md shadow-purple-200 flex items-center justify-center gap-2"><Scale size={14}/>Settle up</button>
    </div>
  </div>
);

// ─── STOREDESK ─────────────────────────────────────────────

export const StoreDeskS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F1FF]">
    <div className="bg-gradient-to-r from-slate-700 to-blue-600 px-4 pt-3 pb-3">
      <div className="text-white font-bold text-sm">New Sale</div>
      <div className="text-slate-300 text-[10px]">Tap to add · $0.00</div>
    </div>
    <div className="px-3 py-2 bg-white border-b border-gray-100">
      <div className="bg-gray-100 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={11} className="text-gray-400"/><span className="text-[10px] text-gray-400">Search or scan barcode…</span>
      </div>
    </div>
    <div className="flex-1 px-3 pt-2 overflow-hidden">
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[{n:"Café",p:"$3.50",e:"☕"},{n:"Croissant",p:"$2.80",e:"🥐"},{n:"Sandwich",p:"$5.20",e:"🥪"},{n:"Juice",p:"$4.00",e:"🍊"},{n:"Water",p:"$1.50",e:"💧"},{n:"Cookie",p:"$1.80",e:"🍪"}].map(p=>(
          <div key={p.n} className="bg-white rounded-xl p-2 flex flex-col items-center border border-gray-100 shadow-sm">
            <div className="text-xl mb-0.5">{p.e}</div>
            <div className="text-[9px] font-bold text-gray-900">{p.n}</div>
            <div className="text-[9px] text-blue-600 font-black">{p.p}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-bold text-gray-900">Cart (3 items)</span>
          <span className="text-[9px] text-red-400 font-bold">Clear</span>
        </div>
        <div className="flex justify-between text-xs font-black text-gray-900 pt-1.5 border-t border-gray-100">
          <span>Total</span><span className="text-blue-600">$11.50</span>
        </div>
      </div>
    </div>
    <div className="px-3 pb-3 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-slate-700 to-blue-600 text-white text-xs font-bold shadow-md">Charge $11.50 →</button>
    </div>
  </div>
);

export const StoreDeskS2: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F1FF]">
    <div className="bg-gradient-to-r from-slate-700 to-blue-600 px-4 pt-4 pb-3">
      <div className="text-white font-bold text-sm">Inventory</div>
      <div className="text-slate-300 text-[10px]">4 products · 2 alerts</div>
    </div>
    <div className="px-3 py-2 bg-white border-b border-gray-100">
      <div className="bg-gray-100 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={11} className="text-gray-400"/><span className="text-[10px] text-gray-400">Search products…</span>
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {name:"Café Americano",sku:"CAF-001",stock:142,price:"$3.50",status:"OK",color:"bg-green-100 text-green-700"},
        {name:"Croissant",sku:"PAN-003",stock:8,price:"$2.80",status:"LOW",color:"bg-yellow-100 text-yellow-700"},
        {name:"Sandwich Club",sku:"SAN-007",stock:23,price:"$5.20",status:"OK",color:"bg-green-100 text-green-700"},
        {name:"Orange Juice",sku:"JUI-002",stock:3,price:"$4.00",status:"CRITICAL",color:"bg-red-100 text-red-700"},
      ].map(p=>(
        <div key={p.name} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-3 border border-gray-100 shadow-sm">
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-gray-900">{p.name}</div>
            <div className="text-[9px] text-gray-400">{p.sku} · {p.price}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-black text-gray-900">{p.stock} units</div>
            <Tag label={p.status} color={p.color}/>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const StoreDeskS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F1FF]">
    <div className="bg-gradient-to-r from-slate-700 to-blue-600 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Sales Report</div>
      <div className="text-slate-300 text-[10px]">Today · Jun 6</div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="bg-white rounded-2xl p-4 mb-3 shadow-md border border-blue-50">
        <div className="text-[10px] text-gray-400 mb-0.5">Today's revenue</div>
        <div className="text-2xl font-black text-blue-700">$3,450</div>
        <div className="flex items-center gap-1 mt-1 text-[10px] text-green-600 font-bold"><TrendingUp size={10}/>+8% vs yesterday</div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-3 mb-3 shadow-sm">
        <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Hourly sales</div>
        <div className="flex items-end justify-between gap-0.5 h-14">
          {[30,45,60,80,95,70,55,85,100,65].map((h,i)=>(
            <div key={i} className={`flex-1 rounded-sm ${i===8?"bg-gradient-to-t from-blue-600 to-blue-400":"bg-blue-100"}`} style={{height:`${h}%`}}/>
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-gray-300 mt-1"><span>8am</span><span>12pm</span><span>5pm</span></div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm">
        <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Top products</div>
        {[{name:"Café",sales:128,revenue:"$448"},{name:"Sandwich",sales:64,revenue:"$333"},{name:"Croissant",sales:89,revenue:"$249"}].map((p,i)=>(
          <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
            <span className={`text-[9px] font-black w-4 ${["text-yellow-500","text-gray-400","text-amber-700"][i]}`}>#{i+1}</span>
            <span className="flex-1 text-[10px] text-gray-700 font-medium">{p.name}</span>
            <span className="text-[9px] text-gray-400">{p.sales} sold</span>
            <span className="text-[10px] font-black text-blue-600">{p.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── MINDSPACE ─────────────────────────────────────────────

export const MindSpaceS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F7FF]">
    <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-4 pt-4 pb-5">
      <div className="text-white font-bold text-base mb-0.5">MindSpace</div>
      <div className="text-sky-100 text-[10px]">Mental health, made accessible</div>
    </div>
    <div className="px-4 pt-3 bg-white border-b border-gray-100 pb-3">
      <div className="text-[10px] text-gray-500 font-semibold mb-2">How are you feeling today?</div>
      <div className="flex gap-1.5 flex-wrap">
        {["😔 Anxious","😞 Sad","😤 Stressed","😶 Numb"].map((m,i)=>(
          <span key={m} className={`px-2.5 py-1 rounded-full text-[9px] font-bold border ${i===0?"bg-sky-100 border-sky-300 text-sky-700":"bg-gray-50 border-gray-200 text-gray-500"}`}>{m}</span>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">Available now</div>
      {[
        {name:"Dr. Ana Ruiz",spec:"Anxiety & Depression",avail:"Today 4:00 PM",price:"$80",bg:"bg-sky-500"},
        {name:"Dr. Pedro Salas",spec:"Trauma & PTSD",avail:"Today 6:00 PM",price:"$90",bg:"bg-teal-500"},
        {name:"Dr. Laura Vega",spec:"Relationships",avail:"Tomorrow 10am",price:"$75",bg:"bg-blue-500"},
      ].map(t=>(
        <div key={t.name} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <AvatarCircle initials={t.name.split(" ")[1][0]} bg={t.bg}/>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-gray-900">{t.name}</div>
            <div className="text-[9px] text-gray-400">{t.spec}</div>
            <div className="text-[9px] text-green-600 font-bold mt-0.5">{t.avail}</div>
          </div>
          <div className="text-xs font-black text-sky-600 shrink-0">{t.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export const MindSpaceS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-sky-600 to-teal-500 px-4 pt-4 pb-8">
      <div className="flex items-center gap-2 mb-3">
        <ArrowLeft size={14} className="text-white/70"/>
        <span className="text-white/70 text-xs">Results</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-2xl font-bold text-white">A</div>
        <div>
          <div className="text-white font-bold text-sm">Dr. Ana Ruiz</div>
          <div className="text-sky-100 text-[10px]">Anxiety & Depression Specialist</div>
          <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-white text-[10px]">4.9</span><span className="text-white/60 text-[10px]">(214)</span></div>
        </div>
      </div>
    </div>
    <div className="px-4 -mt-4 mb-3">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex gap-3">
        {[{l:"Experience",v:"8 yrs",c:"text-sky-600"},{l:"Sessions",v:"214",c:"text-gray-700"},{l:"Per session",v:"$80",c:"text-teal-600"}].map(s=>(
          <div key={s.l} className="flex-1 text-center">
            <div className={`text-sm font-black ${s.c}`}>{s.v}</div>
            <div className="text-[9px] text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Specialties</div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {["Anxiety","Depression","Burnout","Self-esteem"].map(s=>(
          <span key={s} className="px-2.5 py-1 bg-sky-50 text-sky-700 rounded-full text-[10px] font-bold border border-sky-100">{s}</span>
        ))}
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl px-3 py-2.5 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold text-green-800">Next available</div>
          <div className="text-[9px] text-green-600">Today · 4:00 PM</div>
        </div>
        <ChevronRight size={14} className="text-green-400"/>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-500 text-white text-xs font-bold shadow-md shadow-sky-200">Book Session · $80 →</button>
    </div>
  </div>
);

export const MindSpaceS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-sky-600 to-teal-500 px-4 pt-6 pb-8 flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mb-2">
        <Heart size={26} className="text-white fill-white/60" />
      </div>
      <div className="text-white font-bold text-base">You're all set!</div>
      <div className="text-sky-100 text-[10px] mt-1 text-center">Session with Dr. Ana Ruiz is confirmed</div>
    </div>
    <div className="flex-1 px-4 -mt-3">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-3 space-y-2.5">
        {[{l:"Therapist",v:"Dr. Ana Ruiz"},{l:"Date",v:"Thursday, Jun 6"},{l:"Time",v:"4:00 PM – 5:00 PM"},{l:"Format",v:"Video call"},{l:"Cost",v:"$80"}].map(i=>(
          <div key={i.l} className="flex justify-between">
            <span className="text-[10px] text-gray-400">{i.l}</span>
            <span className="text-[10px] font-bold text-gray-900">{i.v}</span>
          </div>
        ))}
      </div>
      <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 mb-3">
        <div className="text-[10px] font-bold text-sky-800 mb-1">Preparation tips</div>
        <div className="text-[9px] text-sky-700 leading-relaxed">Find a quiet space. Have water nearby. It's ok to feel nervous — you got this 💙</div>
      </div>
      <button className="w-full py-3 rounded-2xl bg-gray-100 text-gray-400 text-xs font-bold" disabled>Join Session (available 5 min before)</button>
    </div>
  </div>
);

// ─── FITCOACH ──────────────────────────────────────────────

export const FitCoachS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#FFF4F0]">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-4 pb-5">
      <div className="text-white font-bold text-base mb-0.5">FitCoach</div>
      <div className="text-orange-100 text-[10px]">Your trainer in your pocket</div>
    </div>
    <div className="flex gap-2 px-4 py-2 bg-white border-b border-gray-100 overflow-hidden">
      {["All","Strength","HIIT","Yoga","Run"].map((c,i)=><Chip key={c} label={c} active={i===0} color="bg-orange-500 text-white"/>)}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {name:"Marco Silva",spec:"Strength & Hypertrophy",r:"4.9",sessions:"340",price:"$45/hr",bg:"bg-orange-500"},
        {name:"Elena Torres",spec:"HIIT & Cardio",r:"4.8",sessions:"218",price:"$38/hr",bg:"bg-red-500"},
        {name:"Andrés Paz",spec:"Yoga & Mobility",r:"4.7",sessions:"187",price:"$35/hr",bg:"bg-pink-500"},
      ].map(c=>(
        <div key={c.name} className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <AvatarCircle initials={c.name[0]} bg={c.bg}/>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-gray-900">{c.name}</div>
            <div className="text-[9px] text-gray-400">{c.spec}</div>
            <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-[10px] text-gray-500 font-medium">{c.r}</span><span className="text-[10px] text-gray-300">·</span><span className="text-[9px] text-gray-400">{c.sessions} sessions</span></div>
          </div>
          <div className="text-xs font-black text-orange-500 shrink-0">{c.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export const FitCoachS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Today's Workout</div>
      <div className="text-orange-100 text-[10px]">Week 2 · Monday — Upper Body</div>
    </div>
    <div className="flex gap-1 px-4 py-2 border-b border-gray-100 overflow-hidden">
      {["Mon","Tue","Wed","Thu","Fri"].map((d,i)=>(
        <div key={d} className={`flex-1 flex flex-col items-center py-1.5 rounded-lg ${i===0?"bg-gradient-to-b from-orange-500 to-red-500 text-white":"text-gray-400"}`}>
          <div className="text-[9px] font-bold">{d}</div>
          {i===0&&<div className="w-1 h-1 rounded-full bg-white mt-0.5"/>}
          {i===2&&<div className="w-1 h-1 rounded-full bg-orange-300 mt-0.5"/>}
        </div>
      ))}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {exercise:"Barbell Squat",sets:"3 × 12 reps",weight:"60 kg",done:true},
        {exercise:"Romanian Deadlift",sets:"3 × 8 reps",weight:"70 kg",done:true},
        {exercise:"Plank Hold",sets:"3 × 45 sec",weight:"BW",done:false},
        {exercise:"Push-ups",sets:"3 × 15 reps",weight:"BW",done:false},
      ].map((ex,i)=>(
        <div key={ex.exercise} className={`flex items-center gap-3 py-2.5 px-3 rounded-xl ${ex.done?"bg-orange-50 border border-orange-100":"bg-gray-50 border border-gray-100"}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black shrink-0 ${ex.done?"bg-gradient-to-br from-orange-500 to-red-500 text-white":"bg-gray-200 text-gray-400"}`}>{ex.done?<Check size={10}/>:i+1}</div>
          <div className="flex-1">
            <div className={`text-[10px] font-bold ${ex.done?"text-orange-700":"text-gray-700"}`}>{ex.exercise}</div>
            <div className="text-[9px] text-gray-400">{ex.sets}</div>
          </div>
          <span className="text-[9px] font-bold text-gray-500 shrink-0">{ex.weight}</span>
        </div>
      ))}
    </div>
  </div>
);

export const FitCoachS3: React.FC = () => (
  <div className="h-full flex flex-col bg-[#FFF4F0]">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-4 pb-4">
      <div className="text-white font-bold text-sm">Your Progress</div>
      <div className="text-orange-100 text-[10px]">June 2025</div>
    </div>
    <div className="px-4 pt-3 flex-1 overflow-hidden">
      <div className="flex gap-2 mb-3">
        <div className="flex-1 bg-white rounded-2xl p-3 text-center border border-orange-100 shadow-sm">
          <div className="text-base font-black text-orange-500">18</div>
          <div className="text-[9px] text-gray-400">Workouts</div>
        </div>
        <div className="flex-1 bg-white rounded-2xl p-3 text-center border border-orange-100 shadow-sm">
          <div className="text-base font-black text-red-500">🔥 12</div>
          <div className="text-[9px] text-gray-400">Day streak</div>
        </div>
        <div className="flex-1 bg-white rounded-2xl p-3 text-center border border-orange-100 shadow-sm">
          <div className="text-base font-black text-green-600">-2.4kg</div>
          <div className="text-[9px] text-gray-400">This month</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-3 mb-3 shadow-sm">
        <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Weight trend</div>
        <div className="flex items-end justify-between gap-0.5 h-12">
          {[82,81.8,81.5,81.2,81,80.8,80.5,80.2,79.9,79.6].map((w,i)=>{
            const h=((82-w)/(82-79.6))*100;
            return <div key={i} className={`flex-1 rounded-sm ${i===9?"bg-gradient-to-t from-orange-500 to-red-400":"bg-orange-200"}`} style={{height:`${Math.max(10,h)}%`}}/>;
          })}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm">
        <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Achievements</div>
        <div className="flex gap-2">
          {[{icon:"🔥",label:"10 streak"},{icon:"💪",label:"First PR"},{icon:"⭐",label:"Perfect wk"}].map(a=>(
            <div key={a.label} className="flex-1 flex flex-col items-center gap-1 bg-orange-50 border border-orange-100 rounded-xl py-2">
              <span className="text-base">{a.icon}</span>
              <span className="text-[8px] text-gray-600 font-bold text-center">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── SKILLPATH ─────────────────────────────────────────────

export const SkillPathS1: React.FC = () => (
  <div className="h-full flex flex-col bg-[#F0F3FF]">
    <div className="bg-gradient-to-r from-indigo-700 to-violet-600 px-4 pt-4 pb-5">
      <div className="text-white font-bold text-base mb-0.5">SkillPath</div>
      <div className="text-indigo-200 text-[10px]">Learn from real experts</div>
      <div className="mt-2 bg-white/20 border border-white/30 rounded-xl flex items-center gap-2 px-3 py-2">
        <Search size={11} className="text-white/60"/>
        <span className="text-[10px] text-white/60">Subject or skill…</span>
      </div>
    </div>
    <div className="flex gap-2 px-4 py-2 bg-white border-b border-gray-100 overflow-hidden">
      {["Math","Physics","English","Coding","History"].map((s,i)=><Chip key={s} label={s} active={i===3} color="bg-indigo-600 text-white"/>)}
    </div>
    <div className="flex-1 px-4 pt-3 space-y-2 overflow-hidden">
      {[
        {name:"Carlos M.",subject:"Python & Web Dev",r:"4.9",sessions:"312",price:"$45/hr",bg:"bg-indigo-500"},
        {name:"Sofía R.",subject:"Data Science",r:"4.8",sessions:"187",price:"$55/hr",bg:"bg-violet-500"},
        {name:"Tomás B.",subject:"Full Stack Dev",r:"4.7",sessions:"98",price:"$50/hr",bg:"bg-purple-500"},
      ].map(t=>(
        <div key={t.name} className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
          <AvatarCircle initials={t.name[0]} bg={t.bg}/>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-gray-900">{t.name}</div>
            <div className="text-[9px] text-gray-400">{t.subject}</div>
            <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-[10px] text-gray-500 font-medium">{t.r}</span><span className="text-[10px] text-gray-300">·</span><span className="text-[9px] text-gray-400">{t.sessions} lessons</span></div>
          </div>
          <div className="text-xs font-black text-indigo-600 shrink-0">{t.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export const SkillPathS2: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-br from-indigo-700 to-violet-600 px-4 pt-4 pb-8">
      <div className="flex items-center gap-2 mb-3">
        <ArrowLeft size={14} className="text-white/70"/>
        <span className="text-white/70 text-xs">Back</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-2xl font-bold text-white">C</div>
        <div>
          <div className="text-white font-bold text-sm">Carlos M.</div>
          <div className="text-indigo-200 text-[10px]">Python & Web Dev</div>
          <div className="flex items-center gap-1 mt-0.5"><Stars/><span className="text-white text-[10px]">4.9</span><span className="text-white/60 text-[10px]">(312 lessons)</span></div>
        </div>
      </div>
    </div>
    <div className="px-4 -mt-4 mb-3">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex gap-3">
        {[{l:"Experience",v:"6 yrs",c:"text-indigo-600"},{l:"Lessons",v:"312",c:"text-gray-700"},{l:"Rate",v:"$45/hr",c:"text-violet-600"}].map(s=>(
          <div key={s.l} className="flex-1 text-center">
            <div className={`text-sm font-black ${s.c}`}>{s.v}</div>
            <div className="text-[9px] text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 px-4 overflow-hidden">
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Pick a time</div>
      <div className="flex gap-2 flex-wrap mb-3">
        {["Mon 9am","Mon 2pm","Tue 10am","Wed 4pm"].map((t,i)=>(
          <span key={t} className={`px-2.5 py-1.5 rounded-xl text-[9px] font-bold border ${i===1?"bg-indigo-600 text-white border-indigo-600":"bg-gray-50 text-gray-600 border-gray-200"}`}>{t}</span>
        ))}
      </div>
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold text-indigo-800">1 hour session</div>
          <div className="text-[9px] text-indigo-500">Mon, Jun 9 · 2:00 PM</div>
        </div>
        <div className="text-sm font-black text-indigo-700">$45</div>
      </div>
    </div>
    <div className="px-4 pb-4 pt-2">
      <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-600 text-white text-xs font-bold shadow-md shadow-indigo-200">Book Lesson · $45 →</button>
    </div>
  </div>
);

export const SkillPathS3: React.FC = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-indigo-700 to-violet-600 px-4 pt-4 pb-6">
      <div className="flex items-center gap-2 mb-2">
        <Video size={16} className="text-white/70" />
        <span className="text-white font-bold text-sm">Live Session</span>
      </div>
      <div className="bg-white/20 rounded-2xl p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-800 flex items-center justify-center text-lg font-bold text-white">C</div>
        <div>
          <div className="text-white font-bold text-xs">Carlos M.</div>
          <div className="text-indigo-200 text-[9px]">Python Basics · Week 1</div>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/>
          <span className="text-white/70 text-[9px]">LIVE</span>
        </div>
      </div>
    </div>
    <div className="flex-1 px-4 pt-3 overflow-hidden">
      <div className="bg-gray-900 rounded-2xl p-4 mb-3 font-mono">
        <div className="text-[9px] text-gray-500 mb-2">lesson.py</div>
        <div className="text-[10px] space-y-0.5">
          <div><span className="text-purple-400">def </span><span className="text-blue-300">greet</span><span className="text-white">(name):</span></div>
          <div className="pl-4"><span className="text-green-400">print</span><span className="text-white">(f</span><span className="text-yellow-300">"Hello, {"{name}"}!"</span><span className="text-white">)</span></div>
          <div><span className="text-purple-400">greet</span><span className="text-white">(</span><span className="text-yellow-300">"World"</span><span className="text-white">)</span></div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-700">
          <div className="text-[9px] text-green-400">▶ Hello, World!</div>
        </div>
      </div>
      <div className="flex gap-2 mb-3">
        {[{l:"Elapsed",v:"23:14",c:"text-gray-700"},{l:"Remaining",v:"36:46",c:"text-indigo-600"},{l:"Session",v:"$45",c:"text-violet-600"}].map(s=>(
          <div key={s.l} className="flex-1 bg-gray-50 rounded-xl p-2 text-center border border-gray-100">
            <div className={`text-xs font-black ${s.c}`}>{s.v}</div>
            <div className="text-[8px] text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-3 py-2.5 flex items-center gap-2">
        <BookOpen size={14} className="text-indigo-500 shrink-0"/>
        <span className="text-[10px] text-indigo-700 font-medium">Next: Variables & data types →</span>
      </div>
    </div>
  </div>
);

export const mockups: Record<string, [React.FC, React.FC, React.FC]> = {
  stylego:    [StyleGoS1,    StyleGoS2,    StyleGoS3],
  fixit:      [FixItS1,      FixItS2,      FixItS3],
  petcare:    [PetCareS1,    PetCareS2,    PetCareS3],
  moveit:     [MoveItS1,     MoveItS2,     MoveItS3],
  tableorder: [TableOrderS1, TableOrderS2, TableOrderS3],
  freshbox:   [FreshBoxS1,   FreshBoxS2,   FreshBoxS3],
  paytrack:   [PayTrackS1,   PayTrackS2,   PayTrackS3],
  spliteasy:  [SplitEasyS1,  SplitEasyS2,  SplitEasyS3],
  storedesk:  [StoreDeskS1,  StoreDeskS2,  StoreDeskS3],
  mindspace:  [MindSpaceS1,  MindSpaceS2,  MindSpaceS3],
  fitcoach:   [FitCoachS1,   FitCoachS2,   FitCoachS3],
  skillpath:  [SkillPathS1,  SkillPathS2,  SkillPathS3],
};
