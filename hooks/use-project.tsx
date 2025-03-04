import { sessionStorageProvider } from "@/lib/utils";
import { ProjectTypes } from "@/types";
import { create } from "zustand";
import {persist} from "zustand/middleware"
interface StoreState {
	project: ProjectTypes | null;
	setProject: (item: ProjectTypes) => void;
}

export const useProjectStore = create<StoreState>()(
	persist(
		(set) => ({
			project: null,
			setProject: (newProject) => set({ project: newProject }),
		}),
		{
			name: "persisted-project",
			storage: sessionStorageProvider,
		}
	)
);

