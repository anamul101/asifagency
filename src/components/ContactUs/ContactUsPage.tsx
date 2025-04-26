// import { useForm } from 'react-hook-form';
// import { useState } from 'react';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   workEmail: string;
//   country: string;
//   jobTitle?: string;
//   companyName?: string;
//   message: string;
//   agreeToTerms: boolean;
// }

// export default function ContactUsPage() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true);
//     try {
//       // Handle form submission logic here
//       console.log(data);
//       alert('Form submitted successfully!');
//     } catch (error) {
//       console.error('Submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First Name *
//             </label>
//             <input
//               {...register('firstName', { required: 'First name is required' })}
//               type="text"
//               id="firstName"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//             {errors.firstName && (
//               <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name *
//             </label>
//             <input
//               {...register('lastName', { required: 'Last name is required' })}
//               type="text"
//               id="lastName"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//             {errors.lastName && (
//               <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
//             )}
//           </div>
//         </div>

//         <div>
//           <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">
//             Work Email *
//           </label>
//           <input
//             {...register('workEmail', {
//               required: 'Work email is required',
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: 'Invalid email address',
//               },
//             })}
//             type="email"
//             id="workEmail"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//           {errors.workEmail && (
//             <p className="text-red-500 text-sm mt-1">{errors.workEmail.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//             Country *
//           </label>
//           <select
//             {...register('country', { required: 'Country is required' })}
//             id="country"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           >
//             <option value="">Select a country</option>
//             <option value="US">United States</option>
//             <option value="CA">Canada</option>
//             <option value="GB">United Kingdom</option>
//             {/* Add more countries as needed */}
//           </select>
//           {errors.country && (
//             <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
//               Job Title
//             </label>
//             <input
//               {...register('jobTitle')}
//               type="text"
//               id="jobTitle"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
//               Company Name
//             </label>
//             <input
//               {...register('companyName')}
//               type="text"
//               id="companyName"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//             Message
//           </label>
//           <textarea
//             {...register('message')}
//             id="message"
//             rows={4}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex items-start">
//           <div className="flex h-5 items-center">
//             <input
//               {...register('agreeToTerms', {
//                 required: 'You must agree to the terms to continue',
//               })}
//               type="checkbox"
//               id="agreeToTerms"
//               className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             />
//           </div>
//           <div className="ml-3 text-sm">
//             <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
//               By checking this box you agree to receive promotional email communications from Scale AI. Your data will be processed in accordance with our Privacy Policy and Terms and Conditions. You may opt out of receiving promotional communications at any time. *
//             </label>
//           </div>
//         </div>
//         {errors.agreeToTerms && (
//           <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>
//         )}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//         >
//           {isSubmitting ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// }