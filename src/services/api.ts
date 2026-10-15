import type {VerificationResult} from '@/types';
const API_URL=process.env.NEXT_PUBLIC_API_URL??'http://localhost:8000';
export async function analyzeClaim(claim:string){/* Later: POST `${API_URL}/api/claims/analyze` */return{id:'demo',status:'processing',claim}}
export async function analyzeImage(file:File){const formData=new FormData();formData.append('file',file);/* Later: POST `${API_URL}/api/claims/analyze-image` */return{id:'demo',status:'processing'}}
export async function getResult(id:string):Promise<VerificationResult|null>{/* Later: GET `${API_URL}/api/results/${id}` */return null}
export async function getHistory():Promise<VerificationResult[]>{/* Later: GET `${API_URL}/api/history` */return []}
export {API_URL};
